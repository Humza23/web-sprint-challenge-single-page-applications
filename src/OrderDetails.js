import React from 'react'

const OrderDetails = (props) => {
    const {details} = props

    
    return (
        <div>
            <h1>Name: {details.name}</h1>
            <h2>Size: {details.size}</h2>
            <h2>Cheese: {details.cheese === true ? 'yes' : 'no'}</h2>
            <h2>Pepperoni: {details.pepperoni === true ? 'yes' : 'no'}</h2>
            <h2>Olives: {details.olives ? 'yes' : 'no'}</h2>
            <h2>Tomatoes: {details.tomatoes === true ? 'yes' : 'no'}</h2>
            <h2>Special: {details.special}</h2>

        </div>
    )
}

export default OrderDetails
