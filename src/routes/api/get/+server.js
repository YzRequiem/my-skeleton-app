
export  const GET = async () => {
 
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await res.json()
    
    return new Response(
    JSON.stringify(data), 
    { status: 200 }
  )
}
