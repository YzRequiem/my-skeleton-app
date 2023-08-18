import prisma from '$lib/prisma';

// fonction au chargement de la page 

export const load = async () => {

    // je récupère toutes mes plantes triées par ordre  d'id croissant
    const plantes = await prisma.plante.findMany(
        {
            orderBy: {
                id: 'asc',
            },
        }
    );

    // je récupère toutes mes mesures pour le graph
    const mesures = await prisma.mesure.findMany();

    // je récupère les dernières (id en fonction de la plante id )mesures pour chaque plante
    const dernieresMesures = await prisma.mesure.groupBy({
        by: ['planteId'],
        _max: {
          id: true,
        },
        orderBy: {
            planteId: 'asc',
        }

    });

    // je stocke les id de mes dernières mesures dans un tableau
    const ids = dernieresMesures.map((mesure) => mesure._max.id);

    // je récupère les id et valeurs de mes dernières mesures
    const dernieresValues = await prisma.mesure.findMany({
        where: {
            id: {
                in: ids,
            },
        },
        select: {
            id: true,
            value: true,
        },
    });
    
    
    
    // je récupere mes value depuis dernieresValues

    const lastValues = dernieresValues.map((mesure) => mesure.value);

    const mesuresParPlante = {};
    const nomDesPlantes = [];
    
    
    // je récupère les noms de mes plantes que stocke dans un tableau
    plantes.forEach((plante) => {
       nomDesPlantes.push(plante.name);
    });
 
    
    mesures.forEach((mesure) => {
        if (!mesuresParPlante[mesure.planteId]) {
            mesuresParPlante[mesure.planteId] = [];
        }
        mesuresParPlante[mesure.planteId].push(mesure.value); 
    });
    
    

    // je créé un tableau associatif pour récupérer mes noms de plantes
    const plantesAssoc = plantes.reduce((acc, plante) => {
        acc[plante.id] = plante.name;
        return acc;
      }, {});
    

    return {plantes, mesures, mesuresParPlante , nomDesPlantes, plantesAssoc, lastValues};

}
