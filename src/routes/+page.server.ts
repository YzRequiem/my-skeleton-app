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

    // je récupère les dernières mesures pour chaque plante en fonction de l'id de la plante 
    // en prenant l'id le plus élevé pour attraper la dernière mesure
    // puis je trie par ordre croissant d'id de plante
    const dernieresMesures = await prisma.mesure.groupBy({
        by: ['planteId'],
        _max: {
          id: true,
        },
        orderBy: {
            planteId: 'asc',
        }
    });

    /**
     * dernieresMesures = [
     *  { _max: { id: 2 }, planteId: 1 },
     *  { _max: { id: 5 }, planteId: 2 },
     */    

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
    /**
     * [
     *      { id: 2, value: 50 },
     *      { id: 5, value: 20 },
     *      { id: 9, value: 60 },
     *      { id: 17, value: 30 }
     * ]
    */
    
    // je récupere mes value depuis dernieresValues
    const lastValues = dernieresValues.map((mesure) => mesure.value);
    /**
     * [ 50, 20, 60, 30 ]
    */    

   const nomDesPlantes = [];
   const mesuresParPlante = {};
    
    
    // je récupère les noms de mes plantes que stocke dans un tableau
    plantes.forEach((plante) => {
       nomDesPlantes.push(plante.name);
    });
    
    // je récupère les valeurs de mes mesures que je stocke dans un tableau associatif
    mesures.forEach((mesure) => {
        
        if (!mesuresParPlante[mesure.planteId]){
            mesuresParPlante[mesure.planteId] = [];
        }
        mesuresParPlante[mesure.planteId].push(mesure.value); 
    });
    
    /**
     * {
     *    1: [ 50, 20, 60, 30 ],
     *    2: [ 50, 20, 60, 30 ],
     *    4: [ 50, 20, 60, 30 ],
     *    5: [ 50, 20, 60, 30 ],
     * }
     */    
    
    // je créé un tableau associatif pour récupérer mes noms de plantes
    const plantesAssoc = plantes.reduce((acc, plante) => { // acc = accumulateur  plante = valeur courante reduit le tableau à un seul élément
        acc[plante.id] = plante.name; // acc[plante.id] = clé  plante.name = valeur permet de récupérer les noms de plantes
        return acc; 
      }, {});

    console.log(plantesAssoc);
    /**
     * {
     *   1: 'Tomate',
     *   2: 'Basilic',
     *   4: 'Persil',
     *   5: 'Menthe',
     */
    
    

    return {plantes, mesures, mesuresParPlante , nomDesPlantes, plantesAssoc, lastValues};

}

 
