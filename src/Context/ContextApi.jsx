import { createContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

let products = createContext();

function AllProducts({ children }) {
  let [data, setData] = useState([
    {
      id: 1,
      title: "Thermo Ball Etip Gloves",
      price: 45743,
      image: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular1.png",
      description: `Discover our curated selection of popular watches that blend classic craftsmanship with modern sophistication. Whether you're dressing up for a formal event or adding flair to your everyday look, our watches are designed to elevate your style and reflect your personality.
                    Each timepiece is crafted with precision, durability, and elegant design—perfect for those who appreciate both functionality and fashion. From minimalist dials to bold chronographs, there’s a perfect watch waiting for your wrist.`,
    },
    {
      id: 2,
      title: "Thermo Ball Etip Gloves",
      price: 45,
      image: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular2.png",
      description: `Discover our curated selection of popular watches that blend classic craftsmanship with modern sophistication. Whether you're dressing up for a formal event or adding flair to your everyday look, our watches are designed to elevate your style and reflect your personality.
                    Each timepiece is crafted with precision, durability, and elegant design—perfect for those who appreciate both functionality and fashion. From minimalist dials to bold chronographs, there’s a perfect watch waiting for your wrist.`,
    },
    {
      id: 3,
      title: "Thermo Ball Etip Gloves",
      price: 743,
      image: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular3.png",
      description: `Discover our curated selection of popular watches that blend classic craftsmanship with modern sophistication. Whether you're dressing up for a formal event or adding flair to your everyday look, our watches are designed to elevate your style and reflect your personality.
                    Each timepiece is crafted with precision, durability, and elegant design—perfect for those who appreciate both functionality and fashion. From minimalist dials to bold chronographs, there’s a perfect watch waiting for your wrist.`,
    },
    {
      id: 4,
      title: "Thermo Ball Etip Gloves",
      price: 73,
      image: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular4.png",
      description: `Discover our curated selection of popular watches that blend classic craftsmanship with modern sophistication. Whether you're dressing up for a formal event or adding flair to your everyday look, our watches are designed to elevate your style and reflect your personality.
                    Each timepiece is crafted with precision, durability, and elegant design—perfect for those who appreciate both functionality and fashion. From minimalist dials to bold chronographs, there’s a perfect watch waiting for your wrist.`,
    },
    {
      id: 5,
      title: "Thermo Ball Etip Gloves",
      price: 53,
      image: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular5.png",
      description: `Discover our curated selection of popular watches that blend classic craftsmanship with modern sophistication. Whether you're dressing up for a formal event or adding flair to your everyday look, our watches are designed to elevate your style and reflect your personality.
                    Each timepiece is crafted with precision, durability, and elegant design—perfect for those who appreciate both functionality and fashion. From minimalist dials to bold chronographs, there’s a perfect watch waiting for your wrist.`,
    },
    {
      id: 6,
      title: "Thermo Ball Etip Gloves",
      price: 5743,
      image: "https://preview.colorlib.com/theme/timezone/assets/img/gallery/popular6.png",
      description: `Discover our curated selection of popular watches that blend classic craftsmanship with modern sophistication. Whether you're dressing up for a formal event or adding flair to your everyday look, our watches are designed to elevate your style and reflect your personality.
                    Each timepiece is crafted with precision, durability, and elegant design—perfect for those who appreciate both functionality and fashion. From minimalist dials to bold chronographs, there’s a perfect watch waiting for your wrist.`,
    },
  ]);

  let [cart, setCart] = useState(0);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem("cartItems")) || [];
    setCart(storedCart.length);
  }, []);

  useEffect(() => {
    fetch("http://localhost:5000/data")
      .then((res) => res.json())
      .then((newData) => {
        if (newData.length > 0) {
          setData((prev) => [...prev, ...newData]); // Merge backend data
        }
      });
  }, []);


  let [PageNotFounds, setPageNotFounds] = useState(false)
  let { pathname } = useLocation()
  if (pathname == "/" || pathname == "/cart" || pathname == "/shop" || pathname == "/contact" || pathname == "/about") {
    useEffect(() => {
      setPageNotFounds(true)
    }, [pathname])
  } else {
    useEffect(() => {
      setPageNotFounds(false)
    }, [])
  }

  let information = {
    data,
    setData,
    cart,
    setCart,
    PageNotFounds,
    setPageNotFounds
  };

  return <products.Provider value={information}>{children}</products.Provider>;
}

export { AllProducts, products };
