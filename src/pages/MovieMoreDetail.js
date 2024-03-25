import React from 'react'
import {useParams} from 'react-router-dom'

const MovieMoreDetail = () => {
	const {id, num} = useParams()
  return (
	<div>Movie ID={id}, Movie No={num}</div>
  )
}

export default MovieMoreDetail