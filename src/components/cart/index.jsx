import React, { useState, useEffect, useContext } from 'react';
import { CartContext } from './context';


function formatPrice(amount) {
    return `$${(amount * 0.1).toFixed(2)}`
}

function totalPrice(items) {
    return items.reduce((acc, item) => acc + item.quantity + item.amount, 0.0)
}


function Cart({ stripeToken }) {

    // bring in context to give access to our cart items 

    // window.Stripe may not be loaded yet which could throw errors | create a piece of state and load it that way

    const [stripe, setStripe] = useState(null)
    const ctx = useContext(CartContext)

    // When the components as loaded we need to be able to use the stripe token | side effects components did mount
    // first argument is a function that we will exe when the side effect happens and the second argument is the piece of state we will watch

    useEffect(() => {
        if(window.Stripe) setStripe(window.Stripe(stripeToken))
    }, [stripeToken])


    function checkout(){
        stripe.redirectToCheckout({
            lineItems: ctx.items.map(item => ({
                quantity: item.quantity,
                price: item.price
            })),
            mode: 'payment',
            successUrl: 'https://your-website.com/success',
            cancelUrl: 'https://your-website.com/canceled',
        })
    }

    return (
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Image</th>
                        <th>Stock</th>
                        <th>Price</th>
                    </tr>
                </thead>
                
                <tbody>
                    {
                      ctx.items.map( item =>(
                        <tr>
                            <td>{item.name}</td>
                            <td>
                                <img
                                src={ `/images/${item.price}.jpg` }
                                alt={item.name}
                                width={ 100 }/>
                            </td>
                            <td>{item.quantity}</td>
                            <td>{formatPrice(item.amount * item.quantity)}</td>
                        </tr>))}
                        <tr>
                            <td style={{ textAlign: "right"}}colSpan={3}> Total: </td>
                            <td>{formatPrice(totalPrice(ctx.items))}</td>
                        </tr>

                        <tr>
                            <td style={{ textAlign: "right"}}colSpan={4}>
                                <button onClick={checkout}>Checkout now!</button>
                             </td>
                        </tr>
                </tbody>
            </table>
        </div>
    )
}


export default Cart;