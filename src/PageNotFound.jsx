import React, { useContext, useEffect } from "react";
import { Typography, Button } from "@material-tailwind/react";
import { FlagIcon } from "@heroicons/react/24/solid";
import { Link, useNavigate } from "react-router-dom";
import { products } from "./Context/ContextApi";

export function PageNotFound() {
    let navigate = useNavigate()
    let { PageNotFounds, setPageNotFounds } = useContext(products)
    console.log(PageNotFounds);

    let backToHome = () => {
            setPageNotFounds(true)
            navigate("/")
    }

    return (
        <div className="h-screen mx-auto grid place-items-center text-center px-8">
            <div>
                <FlagIcon className="w-20 h-20 mx-auto" />
                <Typography
                    variant="h1"
                    color="blue-gray"
                    className="mt-10 !text-3xl !leading-snug md:!text-4xl"
                >
                    Error 404 <br /> It looks like something went wrong.
                </Typography>
                <Typography className="mt-8 mb-14 text-[18px] font-normal text-gray-500 mx-auto md:max-w-sm">
                    Don&apos;t worry, our team is already on it.Please try refreshing
                    the page or come back later.
                </Typography>
                <Button color="gray" onClick={backToHome} className="cursor-pointer text-black w-full px-4 md:w-[8rem]">
                    back home
                </Button>
            </div>
        </div>
    );
}

export default PageNotFound;