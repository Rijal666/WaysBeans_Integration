import { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import BasicExample from "../component/header"
import { useNavigate } from "react-router-dom";



function AddProduct() {
    const [imageURL, setImageURL] = useState("/img/placeholder.png");
    const handleImage = (e) => {
        const file = e.target.files[0];
        const imageURL = URL.createObjectURL(file);
        setImageURL(imageURL);
    };

    const [dataProduct, setDataProduct]  = useState({
        id: new Date().getTime,
        nameProduct:"",
        stock:"",
        price:"",
        desc:"",
        image:"",
    })

    const onChangeHandler = (e) => {
        setDataProduct({
            ...dataProduct,
            [e.target.name] : e.target.value
        })
    }

     const navigate = useNavigate();
    const onSubmitHandler = (e) => {
        e.preventDefault()
        const newProduct = {
            ...dataProduct,
            id: new Date().getTime(),
            image: imageURL,
        }
        
        const getProduct = JSON.parse(localStorage.getItem("getProduct"))
        
        if (getProduct === null){
            localStorage.setItem("getProduct", JSON.stringify([newProduct]))
        }else{
            getProduct.push(newProduct)
            localStorage.setItem("getProduct", JSON.stringify(getProduct))
        }
        navigate("/")
    }

   
    // const handlesubmit = () => {
    //     navigate("/")
    // }
        
  return (
      <>
    <BasicExample/> 
    <Container fluid>
        <div style={{ margin:"50px 100px", display:"flex",flexWrap:"wrap",justifyContent:"space-between"}}>
            <div style={{width:"40%"}}>
            <h1 style={{margin:"50px 0"}}>Add Product</h1>
            <Form onSubmit={onSubmitHandler}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Name" name="nameProduct" onChange={onChangeHandler} style={{
                    padding:"10px", borderColor:"#613D2B", backgroundColor:"#d7cfca",
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Stock" name="stock" onChange={onChangeHandler} style={{
                    padding:"10px", borderColor:"#613D2B", backgroundColor:"#d7cfca"
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Control type="text" placeholder="Price" name="price" onChange={onChangeHandler} style={{
                    padding:"10px", borderColor:"#613D2B", backgroundColor:"#d7cfca"
                    }}/>
                </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Control as="textarea" rows={4}  placeholder="Description Product" name="desc" onChange={onChangeHandler} style={{ borderColor:"#613D2B", backgroundColor:"#d7cfca", resize:"none"}}/>
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
                        <Form.Control type="file" onChange={handleImage} hidden/>
                </Form.Label>
                </div>

            <div style={{display:"flex", justifyContent:"center"}}>
                <button type="sumbit" style={{backgroundColor:"#613D2B", border:"none", color:"white", padding:"3px 50px", borderRadius:"8px", margin:"20px"}}>Add Product</button>
            </div>
            </Form>
            </div>
            <div>
                <img src={imageURL} alt="ImageProduct" style={{width:"436px"}}></img>
            </div>
        </div>
    </Container>
        </>
  );
}

export default AddProduct;