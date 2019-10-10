const apiSKNB = 'http://localhost:3000/sukiennoibat'

async function getSKNB(){
    try{
        let response = await fetch(apiSKNB)
        let responseJson = await response.json()
        return responseJson;
    }
    catch(error)
    {
        console.log(`Erro is : ${error}`)

    }
}
export{getSKNB}