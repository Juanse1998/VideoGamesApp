export async function getAllGames() {
    const response = await  fetch(`/videogames`)
    const responseJson = await response.json()
    return responseJson
}

export async function filtGames(name) {
    const response = await  fetch(`/videogames/${name}`)
    const responseJson = await response.json()
    return responseJson
}

export async function pagGames() {
    const response = await fetch(`https://api.rawg.io/api/games?key=5929a09e38154d2b8ef282a7f356fe59`)
    const responseJson = await response.json()
    return responseJson
}

export async function gameDb() {
    const response = await fetch(`/detailGames`)
    const responseJson = await response.json()
    return responseJson
}


export async function detailsGame(id) {
    const response = await  fetch(`/videogame/${id}`)
    const responseJson = await response.json()
    return (responseJson)
}





export default {
    getAllGames,
    filtGames,

    detailsGame
}
