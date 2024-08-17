export const queryOptimize = async (prompt: string) =>{

    const query = await fetch('http://localhost:4000/api/openai/query-optimizer', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify( {prompt} )
    })

    const data = await query.json()
    console.log(data.response)

    return data.response
}

export default queryOptimize