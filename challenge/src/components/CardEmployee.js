import React from 'react'

export const CardEmployee = ({data, deleteFromList}) => {
  return (
    <div>
        <h2>Employer { data.name }</h2>
        <p>Price: { data.price }</p>
        <button onClick={ () => deleteFromList(data.id) }>Delete</button>
    </div>
  )
}
