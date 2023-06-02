export const getMovieDB = async (title) => {
    const moviekey = import.meta.env.VITE_THEMOVIEDB_KEY
    const formattitle = titlePlus(title)
    const apiurl = `https://api.themoviedb.org/3/movie`
    const apititle = `${apiurl}/${formattitle}?&api_key=${moviekey}`
    console.log(apititle)
    const response = await fetch(apititle) 
    const data = await response.json()
    return data;
}

const titlePlus = (title = "") =>{
    const resultado = title.replace(' ', '+')
    return resultado
}

/* export const getImages = async (foto) => {
    const formatfoto = foto
    const apiurlfoto = `https://image.tmdb.org/t/p`
    const apifoto = `${apiurlfoto}/w500${formatfoto}`
    console.log(apifoto)
    const response = await fetch(apifoto) 
    const dataImage = await response.json()
    return dataImage;
} */

export const getMovieDBCategories = async (category) => {
    const moviekey = import.meta.env.VITE_THEMOVIEDB_KEY
    const apiurl = `https://api.themoviedb.org/3/movie`
    const apititle = `${apiurl}/${category}?&api_key=${moviekey}`
    console.log(apititle)
    const response = await fetch(apititle) 
    const data = await response.json()
    return data;
}