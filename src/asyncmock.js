const productos = [{
        id: '1',
        name: 'Tablet Google',
        price: 14000,
        category: 'Tablet',
        img: '/imagenes/icysl39azuqnz4yrv7wc9zopwx8a45492484.webp',
        stock: 30,
        description: 'Marca Google, Pantalla de 14", Windows 11'
    },
    {
        id: '2',
        name: 'Audifonos Beats',
        price: 20000,
        category: 'Audifonos',
        img: '/imagenes/Audifonos-removebg-preview.png',
        stock: 20,
        description: 'Beats Studio3 Wireless Noise Cancelling Over-Ear Headphones - Apple W1 Headphone Chip, Class 1 Bluetooth, 22 Hours of Listening Time, Built-in Microphone - Defiant Black-Red (Latest Model)'
    },
    {
        id: '3',
        name: 'Teclado Gamer',
        price: 15000,
        category: 'Accesorios',
        img: '/imagenes/71Xk+hR7oTL._AC_SX679_.jpg',
        stock: 15,
        description: 'Snpurdiri ST-K3 60% Wired Gaming Keyboard, RGB Backlit Ultra-Compact Mini Keyboard, Waterproof Mini Compact 61 Keys Keyboard for PC/Mac Gamer, Typist, Travel, Easy to Carry on Business Trip(Black)'
    },

]

export const getProductos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos)
        }, 500)
    })
}

export const getProductosByCategory = (categoryId) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.filter(prod => prod.category === categoryId))
        }, 500)
    })
}


export const getProductosById = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(productos.find(prod => prod.id === id))
        }, 500)
    })
}