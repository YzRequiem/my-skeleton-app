import prisma from '$lib/prisma';



export const POST = async ({request}) => {
    const body = await request.json();
     
    if (body) {
        const newValue = await prisma.mesure.create(
            {
                data: body
            }
      );
      newValue
    }

    return new Response(

        JSON.stringify({message: 'Success, request received! '}),
        { status: 200 }
    

    )


}