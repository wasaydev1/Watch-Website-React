import React, { useEffect } from 'react'
import { Route, Routes} from 'react-router-dom'
import Section1 from '../section-1/Section1'
import Cart from '../section-1/Cart'
import PopularWatch from '../section-1/PopularWatch'
import Section2 from '../section2/Section2'
import Section3 from '../section3/Section3'
import Section4 from '../section4/Section4'
import PageNotFound from '../PageNotFound'
import AdminPanel from '../AdminPanel'

const Routing = () => {

    return (
            <Routes>
                <Route path="/" element={<Section1 />} />
                <Route path="/" element={<PopularWatch />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/shop" element={<Section2 />} />
                <Route path="/about" element={<Section3 />} />
                <Route path="/contact" element={<Section4 />} />
                <Route path="/admin/adminPanel" element={<AdminPanel />} />
                <Route path="*" element={<PageNotFound />} />
            </Routes>
        
    )
}

export default Routing
