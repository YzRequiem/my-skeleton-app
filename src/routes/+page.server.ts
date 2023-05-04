import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = async () => {
     
    const plantes = await prisma.plante.findMany();

    console.log(plantes);
    
    return plantes;
   
 
}
