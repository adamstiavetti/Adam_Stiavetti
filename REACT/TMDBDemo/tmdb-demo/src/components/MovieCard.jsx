const MovieCard = ({data}) => {
    const {title, overview, vote_average, poster_path} = data
    const poster_image = `https://image.tmdb.org/t/p/w185/${poster_path}`
    return (
        <>
            <div style={{border: "red 3px solid"}}>
                <h1>{title}</h1>
                <img src={poster_image} alt={title}/>
                <p>{overview}</p>
                <p>{vote_average}</p>
            </div>
        </>
    )
}

export default MovieCard;