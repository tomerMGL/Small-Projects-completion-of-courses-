import React from 'react'

export default function CartScreen(props) {
    const productId = props.match.params.id;
    const qty = props.location.search ? 
    Number(props.location.search.split('=')[1]) : 1;
    return (
        <div>
            <h1>Cart Screen</h1>
            <p>add to cart productId: {productId} qty: {qty}</p>
        </div>
    )
}
