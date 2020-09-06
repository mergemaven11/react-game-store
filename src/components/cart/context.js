import React, { useState, createContext } from 'react'

export const CartContext = createContext(null)

export default function CartProvider({ children }) {
    const [items, setItems] = useState([])


    // this will get whatever was in the old array and past that previous 
    // state to the new one using (...previous)
    function addToCart(item) {
        setItems(previousState => [...previousState, item])
    }

    function productQuantities(items) {
        // reduce here to keep track of all the product quantities using the accumulator first argument
        return items.reduce((acc, item) => {
            const dup = acc.find(_item => _item.price === item.price)

            if (dup) {
                dup.quantity = dup.quantity + 1
            } else {
                acc.push({
                    quantity: 1,
                   ...item
                })
            }
            return acc
        }, [])
    }

    return (
        <CartContext.Provider
            value={{
                items: productQuantities(items),
                addToCart,
            }}
        >
            { children }
        </CartContext.Provider>
    )
}