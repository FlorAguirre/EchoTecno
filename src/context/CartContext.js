import { useState, createContext, Profiler, useContext, useEffect} from "react"


const CartContext = createContext()

export const CartProvider = ({ children  }) => {
    const [totalQuantity, setTotalQuantity] = useState(0)
    const [cart, setCart] = useState ([])


    useEffect(() => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })
        setTotalQuantity(totalQuantity)
    }, [cart])

    const addItem = (productToAdd) => {
        if(!isInCart(productToAdd.id)) {
            setCart([...cart, productToAdd])
        }
    }

    const removeItem = (id) => {
        const cartWithoutProduct = cart.filter(prod => prod.id !== id)

        setCart(cartWithoutProduct)
       
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)

    }

    const clearCart = () => {
        setCart ([])
    }

/*     const getCartQuantity = () => {
        let totalQuantity = 0
        cart.forEach(prod => {
            totalQuantity += prod.quantity
        })

        return totalQuantity
    } */

    
    const getTotalPrice = () => {
        let totalPrice = (cart[0].price * cart[0].quantity)
        return totalPrice
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, isInCart, totalQuantity, clearCart, getTotalPrice}}>
            { children }
        </CartContext.Provider>
    )
}

export default CartContext

/* export const useCart = () => {
    return useContext(CartContext)
} */