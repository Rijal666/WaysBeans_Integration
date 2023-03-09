// import BasicExample2 from "./component/header2"
// import BasicExample from "./component/header";
import {Routes, Route} from 'react-router-dom';
// import { useState } from  "react";
import Home from "./pages/home";
// import Login from "./pages/login";
import Detail from "./pages/detail"
import Cart from "./pages/cart"
import Dprofile from './pages/dProfile';
import AddProduct from './pages/addProduct';
import Dashboard from './pages/Dashboard';
import ListP from './pages/list';
import UpdateProduct from './pages/updateProduct'

// const navlog = BasicExample;
// const navprof = BasicExample2

function App(){

  // const [data,setData] = useState("");
 
  return(
    <>
    <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="/Detail_Profile" element={<Dprofile />} />
        <Route path="/Add_Product" element={<AddProduct />} />
        <Route path="/Update_Product/:id" element={<UpdateProduct />} />
        <Route path="/Admin_Dashboard" element={<Dashboard />} />
        <Route path="/List_Product" element={<ListP />} />

      </Routes>
    </>
  )
}

export default App;