import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

const UpdateMovie = ({ movies }) => {
  const { id } = useParams()
  const [movie, setMovie] = useState({})

  useEffect(() => {
    const movie = movies.filter(movie => movie.id == id)
    setMovie({
      title: movie.title,
      director: movie.director,
      metascore: movie.metascore,
      stars: movie.stars
    })

    console.log(movie)
  }, [])

  return (
    <div className="movie-updater">
      <fieldset>
        <legend>Update Movie:</legend>
        <input value={movie.title} placeholder="Title" />
      </fieldset>
    </div>
  )
}

export default UpdateMovie
