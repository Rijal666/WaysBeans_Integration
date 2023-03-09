import Table from 'react-bootstrap/Table';
import BasicExample from "../component/header"
import Container from 'react-bootstrap/Container';
import { Button } from 'react-bootstrap';
import { useState, useEffect} from 'react';
import { useNavigate } from 'react-router-dom';

function ListP() {
  const [listProduct, setListProduct] = useState([]);

  function getListProduct(){
    const getProduct = JSON.parse(localStorage.getItem("getProduct"));

    setListProduct(getProduct);
  }

  useEffect(() => {
    getListProduct();
  },[]);

  function deleteProduct(id) {
    const newlist = listProduct.filter((item) => item.id !== id);
    localStorage.setItem("getProduct", JSON.stringify(newlist));
    getListProduct();
  }

  const navigate = useNavigate();

  return (
    <>
    <BasicExample/>
    <Container fluid>
        <div  style={{margin:"20px 90px"}}>
        <h1 style={{color:"#613D2B", margin:"50px 0"}}>List Product</h1>
    <Table bordered hover size="sm">
      <thead>
        <tr style={{backgroundColor:"#e5e5e5"}}>
          <th>No</th>
          <th>Image</th>
          <th>Name</th>
          <th>Stock</th>
          <th>Price</th>
          <th>Description</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
      {listProduct.map((item, index) => (
        <tr key={item.id}>
          <td>{index + 1}</td>
          <td><img src={item.image} alt={item.nameProduct} style={{width:"100px"}}></img></td>
          <td>{item.nameProduct}</td>
          <td>{item.stock}</td>
          <td>{item.price}</td>
          <td>{item.desc}</td>
          <td>
            <Button className='bg-danger' onClick={() => deleteProduct (item.id)}>delete</Button>
            <Button className='bg-success' onClick={() => navigate(`/Update_Product/${item.id}`)}>edit</Button>
          </td>
         </tr>
          ))}
      </tbody>
    </Table>
            </div>
    </Container>
    </>
  );
}

export default ListP;