import React, { useContext, useEffect, useState } from 'react';
import { products } from '../Context/ContextApi';
import toast from 'react-hot-toast';
import sec2Image from '../assets/section2images/bgImage';
import SortFilterBar from './SortFilterBar';

const Shop = () => {
  const { data, cart, setCart } = useContext(products);
  const [sortedData, setSortedData] = useState([]);
  const [sortOption, setSortOption] = useState('newest');
  const [itemsPerPage, setItemsPerPage] = useState('40');

  useEffect(() => {
    let updatedData = [...data];

    if (sortOption === 'price_desc') {
      updatedData.sort((a, b) => b.price - a.price);
    } else if (sortOption === 'newest') {
      updatedData.sort((a, b) => b.id - a.id); // assuming latest = highest ID
    } else if (sortOption === 'popular') {
      updatedData.sort((a, b) => b.rating?.rate - a.rating?.rate); // assuming rating is popularity
    }

    setSortedData(updatedData);
  }, [sortOption, data]);

  const addToCart = (item) => {
    let existingCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    let alreadyExists = existingCart.some((cartItem) => cartItem.id === item.id);

    if (alreadyExists) {
      toast.error("Already Cart Existing", { duration: 3000 });
      return;
    }

    let updatedCart = [...existingCart, item];
    localStorage.setItem("cartItems", JSON.stringify(updatedCart));
    setCart(updatedCart.length);
    toast.success("Item Added to Cart!");
  };

  return (
    <section className='bg-white min-h-[100vh] mt-25 flex flex-col justify-center items-center mb-40'>
      <div className='w-full h-[60vh] relative flex justify-center items-center'>
        <img src={sec2Image} alt="" className='h-full w-full' />
        <p className='ShopProduct absolute text-7xl font-black '>Watch Shop</p>
      </div>

      <div className='flex gap-4 items-center min-h-80 mt-20'>
        <SortFilterBar
          activeSort={sortOption}
          onSortChange={setSortOption}
          itemsPerPage={itemsPerPage}
          onItemsPerPageChange={setItemsPerPage}
        />
      </div>

      <div className='flex flex-wrap justify-center items-center gap-8'>
        {sortedData.slice(0, Number(itemsPerPage)).map((items, index) => (
          <div key={index} className='flex flex-col gap-4 justify-center items-center'>
            <div className="sixProductShow h-120 relative w-100 overflow-hidden bg-gray-200 flex-col flex justify-center items-center">
              <img src={items.image} className='h-full w-full object-cover' alt="..." />
              <h1
                className='expenseWatch h-20 flex justify-center items-center font-semibold w-full bottom-0 text-white absolute cursor-pointer bg-black bg-opacity-50'
                onClick={() => addToCart(items)}
              >
                Add To Cart
              </h1>
            </div>
            <div className='flex flex-col gap-2 justify-center items-center'>
              <h1 className='text-2xl font-bold text-gray-700'>{items.title}</h1>
              <p className='expensPrice'>$ {items.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Shop;
