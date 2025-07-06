import React, { useContext } from 'react'
import { products } from '../Context/ContextApi';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';

const PopularWatch = () => {
    let { data, cart, setCart, setData } = useContext(products);

    const addToCart = (item) => {
        let existingCart = JSON.parse(localStorage.getItem("cartItems")) || []
        let filteringCart = existingCart.some((cartItem) => cartItem.id == item.id)

        if (filteringCart == true) {
            toast.error("Already Cart Existing", {
                duration : 3000
            });
            return;
        }
        let updateCard = [...existingCart, item]
        localStorage.setItem("cartItems", JSON.stringify(updateCard))
        setCart(updateCard.length)
        toast.success("Item Added to Cart!")
    };



    return (
        <section className='bg-white min-h-[100vh] px-20 flex flex-col justify-center'>
            <div className='section2Image flex flex-col  gap-4 items-center  justify-center min-h-80 mt-20'>
                <h2 className='text-5xl font-bold'>
                    Popular <span className='Popularwatch'>Watch</span>
                </h2>
                <p className='text-lg mt-4 w-[50%] text-center text-gray-500'>
                    Consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
            </div>
            <div className='flex flex-wrap justify-center items-center gap-8'>
                {data.slice(0,6).map((items, index) => {
                    return (
                        <div key={index} className='flex flex-col gap-4 justify-center items-center'>
                            <div className="sixProductShow h-120 relative w-100 overflow-hidden bg-gray-200 flex-col flex justify-center items-center">
                                <img src={items.image} className='h-full w-full object-cover' alt="..." />
                                <h1
                                    className='expenseWatch h-20 flex justify-center items-center font-semibold w-full bottom-0 text-white absolute cursor-pointer bg-black bg-opacity-50'
                                    onClick={() => addToCart(items)}>
                                    Add To Cart
                                </h1>
                            </div>
                            <div className='flex flex-col gap-2 justify-center items-center'>
                                <h1 className='text-2xl font-bold text-gray-700'>{items.title}</h1>
                                <p className='expensPrice'>$ {items.price}</p>
                            </div>
                        </div>
                    );
                })}
                <div className='expensviewmoreproducts h-20 w-full flex justify-center items-center'>
                    <Link to={`/shop`} className='link'>VIEW MORE PRODUCTS</Link>
                </div>
            </div>
        </section>
    )
}

export default PopularWatch;
