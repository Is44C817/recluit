import React from 'react'

export const ProductList = ({ data, addToList }) => {
  return (
    <div>
        <h2>Employer { data.name }</h2>
        <p>Price: { data.price }</p>
        <button onClick={ () => addToList(data.id) }>Add</button>
    </div>
  )
}
