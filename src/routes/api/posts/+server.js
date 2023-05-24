export  const GET = async () => {
    
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    return new Response(
    JSON.stringify(data), 
    { status: 200 }
  )
}

export const POST = async ({request}) => {
    const body = await request.json()
     console.log(body);

    return new Response(
    JSON.stringify({message: 'Ta requette à bien été reçue michel '}),
    { status: 200 }
    )


}