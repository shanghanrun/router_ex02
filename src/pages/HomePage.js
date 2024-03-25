import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const HomePage = () => {
	const navigate = useNavigate()
	function goProductPage(item){
		navigate(`/products?q=${item}`)
	}
  return (
	<div>
		<h1>Home Page</h1>
		<Link to='/about'>About Page</Link>
		<button onClick={()=>goProductPage('pants')}>Pants</button>
		<button onClick={()=>goProductPage('skirts')}>Skirts</button>
		<button onClick={()=>goProductPage('hat')}>Hat</button>
	</div>
  )
}

export default HomePage