import Navbar from './section-1/Navbar';
import Routing from './Routing/Routing';
import { Toaster } from 'react-hot-toast';
import Sec1Footer from './section-1/sec1Footer';
import TopScroll from './Routing/TopScroll';
import { useContext } from 'react';
import { products } from './Context/ContextApi';

function App() {
      let {PageNotFounds}  = useContext(products)
      console.log(PageNotFounds);
      


  return (
    <>
      <Toaster
        position="top-right"
        reverseOrder={true}
      />
      {PageNotFounds == true ? <Navbar /> : null}
      <Routing />
      <TopScroll />
      
      {PageNotFounds == true ?  <Sec1Footer /> : null}
    </>
  );
}

export default App;
