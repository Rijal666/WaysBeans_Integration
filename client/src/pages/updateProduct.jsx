import { useState, useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import BasicExample from "../component/header"
import { useParams } from "react-router-dom";



function UpdateProduct() {
    const params = useParams();
    const id = parseInt(params.id);
    const [imageUrl, setImageUrl] = useState("/image/product-placeholder.webp");
  
    const [addProduct, setAddProduct] = useState({
      name: "",
      stok: "",
      price: "",
      description: "",
      photo: "",
    });
  
    const handleImageUpload = (e) => {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setImageUrl(imageUrl);
    };
  
    const fetchProduct = () => {
      const getProduct = JSON.parse(localStorage.getItem("getProduct"));
      const findProduct = getProduct.find((product) => product.id === id);
      setAddProduct({
        ...findProduct,
      });
    };
  
    useEffect(() => {
      fetchProduct();
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const onChangeHandler = (e) => {
      setAddProduct({
        ...addProduct,
        [e.target.name]: e.target.value,
      });
    };
  
    const onSubmitHandler = (e) => {
      e.preventDefault();
  
      // const newProduct = {
      //   ...addProduct,
      //   photo: imageUrl,
      // };
  
      const dataProduct = JSON.parse(localStorage.getItem("getProduct"));
  
      const indexProduct = dataProduct.findIndex((item) => item.id === id);
      dataProduct[indexProduct] = addProduct;
      localStorage.setItem("dataProduct", JSON.stringify(dataProduct));
    };
  return (
      <>
    <BasicExample/> 
    <Container fluid>
        <div style={{ margin:"50px 100px", display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            <div style={{width:"40%"}}>
            <h1 style={{margin:"50px 0"}}>Add Product</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" name="nameProduct" value={addProduct.nameProduct} onChange={onChangeHandler} style={{
                    padding:"10px", borderColor:"#613D2B", backgroundColor:"#d7cfca",
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="number" placeholder="Stock" name="stock" value={addProduct.stock} onChange={onChangeHandler} style={{
                    padding:"10px", borderColor:"#613D2B", backgroundColor:"#d7cfca"
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="number" placeholder="Price" name="price" value={addProduct.price} onChange={onChangeHandler} style={{
                    padding:"10px", borderColor:"#613D2B", backgroundColor:"#d7cfca"
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={4}  placeholder="Description Product" name="desc" value={addProduct.desc} onChange={onChangeHandler} style={{ borderColor:"#613D2B", backgroundColor:"#d7cfca", resize:"none"}}/>
                </Form.Group>
                <div>
                <Form.Label className="mb-3"style={{
                        padding:"10px", marginRight:"200px" , borderColor:"#613D2B", backgroundColor:"#d7cfca", borderRadius:"8px", display:"flex"
                    }}
                >
                    <div style={{display:"flex", justifyContent:"space-between",width:"100%"}}>
                    <p style={{margin:"0", color:"#797c8a"}}>Photo Product</p>
                    <img src='/img/file.png' alt='#'></img>
                    </div>
                        <Form.Control type="file" onChange={handleImageUpload} hidden/>
                </Form.Label>
                </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <button type="sumbit" style={{backgroundColor:"#613D2B", border:"none", color:"white", padding:"3px 50px", borderRadius:"8px", margin:"20px"}}>Update Product</button>
            </div>
            </Form>
            </div>
            <div>
                <img src={imageUrl} value={addProduct.photo} alt="ImageProduct" style={{width:"436px"}}></img>
            </div>
        </div>
    </Container>
        </>
  );
}

export default UpdateProduct;