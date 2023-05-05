import prisma from '$lib/prisma';

export const load = async () => {
    const plantes = await prisma.plante.findMany();
    const mesures = await prisma.mesure.findMany();
    // const groupMesure = await prisma.mesure.groupBy({
    //     by: ['planteId', 'value',],
    //     where: {
    //         take: 1,
    //     },

    //     orderBy: {
    //         planteId: 'desc',
    //     },
    // })
    // console.log(groupMesure);

    const mesuresParPlante = {};
    const nomDesPlantes = [];
    

    plantes.forEach((plante) => {
       nomDesPlantes.push(plante.name);
    });
 
    
    mesures.forEach((mesure) => {
        if (!mesuresParPlante[mesure.planteId]) {
            mesuresParPlante[mesure.planteId] = [];
        }
        mesuresParPlante[mesure.planteId].push(mesure.value); 
    });

    // const valeurs = mesures.map((mesure: any) => mesure.value);

    return {plantes, mesures, mesuresParPlante , nomDesPlantes};

}
