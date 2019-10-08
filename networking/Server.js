const apiSNTN = 'http://localhost:3000'

async function getSNTN(){
    try{
        let response = await fetch(apiSNTN)
        let responseJson = await response.json()
        return responseJson;
    }
    catch(error)
    {
        console.log(`Erro is : ${error}`)

    }
}
export{getSNTN}