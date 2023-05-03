// import { PrismaClient } from '@prisma/client'
// import { z } from 'zod';
// import { superValidate } from 'sveltekit-superforms/server';
// import { fail } from '@sveltejs/kit';
// import formData from 'form-data';

// const newContactSchema = z.object({
// 	name: z
// 		.string()
// 		.min(1, { message: ' Veuillez renseigner un nom' })
// 		.max(100)
// 		.trim()
// 		.regex(new RegExp("^[A-Za-z]+(?:[ -'][A-Za-z]+)*$")),
// 	seuil: z
// 		.number()
// 		.gte(0, { message: 'Veuillez renseigner un seuil entre 1 et 100' })
// 		.lte(100),
// 	matricule: z
// 		.string()
// 		.min(1, { message: 'Min 1 caractère' })
// 		.max(100, { message: 'Renseignez un numéro de téléphone valide' })
// 		.trim()
//         .transform((texte) => texte.replace(/<\/?[^>]+(>|$)/g, '')) // Supprimer les balises HTML
// 		.transform((texte) => texte.replace(/[(){}[\]<>%&|^!]/g, '')) // Supprimer les caractères potentiellement dangereux pour JavaScript
//         ,
// });

// const prisma = new PrismaClient()

// export const load = async () => {
// 	const form = await superValidate(newContactSchema);
// 	return {
// 		form
// 	};
// };

// export const actions = {
// 	default: async (request) => {
// 		const form = await superValidate(request, newContactSchema);
// 		console.log('POST', form);
//         const newPlante = await prisma.plante.create({
//                     data: {
//                         name: form.data.name,
//                         seuil: form.data.seuil,
//                         matricule: form.data.matricule,
//                     },
//                   })
//         console.log(newPlante)

// 		if (!form.valid) {
// 			return fail(400, { form });
// 		} else {
// 			return {
//                 form,
//                 newPlante 
//             };
			
// 		}
// 	}
// };

// const newUser = await prisma.user.create({
//     data: {
//       name: 'Alice',
//       email: 'alice@prisma.io',
//     },
//   })
  
//   const users = await prisma.user.findMany()