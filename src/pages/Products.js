import React from 'react'
import { useSearchParams } from 'react-router-dom'

const Products = () => {
	let [query, setQuery] = useSearchParams()
	const productList =[
		'a','b','c','d','longpants', 'shotpants', 'longskirt', "dirtyPants"
	]
	// console.log('q: ', query.get('q'))
	const q = query.get('q')
	const selectedList = productList.filter(item => item.toLowerCase().includes(q))
  return (
	<div>
		<h1>Product {q}</h1>
		<ul>
			{selectedList.map(item => <div>{item}</div>)}
		</ul>
	</div>
  )
}

export default Products