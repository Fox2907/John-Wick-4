export const getMovies = async (title) => {
    const moviekey = import.meta.env.VITE_MOVIE_KEY
    const formattitle = titlePlus(title)
    const apiurl = `http://www.omdbapi.com/`
    const apititle = `${apiurl}?t=${formattitle}&apikey=${moviekey}`
    console.log(apititle)
    const response = await fetch(apititle) 
    const data = await response.json()
    return data;
}

const titlePlus = (title = "") =>{
    const resultado = title.replace(' ', '+')
    return resultado
}
