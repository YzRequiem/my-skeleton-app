import prisma from '$lib/prisma';
import type { PageServerLoad } from './$types';



export const load = async () => {
     
    const plantes = await prisma.plante.findMany();
    const mesures = await prisma.mesure.findMany(
      //  {where: { planteId: 1 },}
    );


    const mesuresParPlante = {};

    mesures.forEach((mesure) => {
        if (!mesuresParPlante[mesure.planteId]) {
            mesuresParPlante[mesure.planteId] = [];
        }
        mesuresParPlante[mesure.planteId].push(mesure.value);
    });

    console.log( mesuresParPlante);

    // const valeurs = mesures.map((mesure: any) => mesure.value);
    // console.log( valeurs);

    // console.log(mesures);
    // console.log(plantes);
    
    return {plantes, mesures, mesuresParPlante};

}
