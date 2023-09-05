import prisma from '$lib/prisma';
import type { Actions } from './$types';
import { fail } from '@sveltejs/kit';

// definitions des actions de formulaire
export const actions: Actions = {
    // funnction delete
    supprimer: async ({url}) => {
        const id = url.searchParams.get('id');
        // si pas d'id
        if (!id) {
            return fail(400, { message: 'Paramètre id manquant' });
        }
        // on essaye de suprimer la plante
        try {
            await prisma.plante.delete({
                where: {
                    id: Number(id),
                },
            });
        }
        // si erreur 
        catch(err) {
            console.error(err);
            return fail(500, { message : 'Erreur interne lors de la suppression' });
        }
        // si tout va bien on supprime et renvoit un message
        return {    
            status: 200,
            body: {
                message: 'Plante supprimée',
            },
        };
    },
}
        
// fonction qui se lance au chargement de la page 

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
    console.log(mesures);

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
    const plantesAssoc = plantes.reduce((acc, plante) => { // acc = accumulateur  plante = valeur courante reduit le tableau à un seul élément
        acc[plante.id] = plante.name; // acc[plante.id] = clé  plante.name = valeur permet de récupérer les noms de plantes
        return acc; 
      }, {});
    

    return {plantes, mesures, mesuresParPlante , nomDesPlantes, plantesAssoc, lastValues};

}

 
