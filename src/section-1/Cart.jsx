import React, { useContext, useEffect, useState } from 'react';
import { products } from '../Context/ContextApi';
import toast from 'react-hot-toast';

const Cart = () => {
    const { setCart } = useContext(products);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const storedItems = JSON.parse(localStorage.getItem("cartItems")) || [];

        const itemsWithQuantity = storedItems.map(item => ({
            ...item,
            quantity: item.quantity || 1
        }));
        setCartItems(itemsWithQuantity);
    }, []);

    const updateLocalStorage = (items) => {
        localStorage.setItem("cartItems", JSON.stringify(items));
        setCart(items.reduce((acc, item) => acc + item.quantity, 0)); // total quantity
    };

    const removeItem = (indexToRemove) => {
        const updatedCart = cartItems.filter((_, index) => index !== indexToRemove);
        setCartItems(updatedCart);
        updateLocalStorage(updatedCart);
        toast.success("Item removed from cart", { duration: 2000 });
    };

    const changeQuantity = (index, delta) => {
        const updatedItems = [...cartItems];
        let newQty = updatedItems[index].quantity + delta;
        if (newQty < 1) return; 
        updatedItems[index].quantity = newQty;
        setCartItems(updatedItems);
        updateLocalStorage(updatedItems);
    };

    return (
        <div className="p-10 min-h-screen bg-gray-100">
            <h2 className="text-4xl font-bold mb-10 text-center text-gray-800">🛒 Your Shopping Cart</h2>

            {cartItems.length === 0 ? (
                <p className="text-center text-2xl italic text-gray-500 mt-20">Your cart is empty.</p>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {cartItems.map((item, index) => (
                        <div key={index} className="flex bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition duration-300">
                            <img src={item.image} alt={item.title} className="w-1/3 object-cover" />
                            <div className="p-6 flex flex-col justify-between w-2/3">
                                <div>
                                    <h3 className="text-xl font-semibold text-gray-800">{item.title}</h3>
                                    <p className="text-sm text-gray-600 my-2 line-clamp-3">{item.description}</p>
                                    <p className="text-lg font-bold text-blue-600 mb-2">${item.price}</p>

                                    {/* Quantity Controller */}
                                    <div className="flex items-center gap-3">
                                        <button
                                            onClick={() => changeQuantity(index, -1)}
                                            className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                                        >–</button>
                                        <span className="font-semibold">{item.quantity}</span>
                                        <button
                                            onClick={() => changeQuantity(index, 1)}
                                            className="w-8 h-8 bg-gray-200 rounded hover:bg-gray-300 text-lg font-bold"
                                        >+</button>
                                    </div>
                                </div>
                                <button
                                    onClick={() => removeItem(index)}
                                    className="mt-4 self-start bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded transition"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Cart;
