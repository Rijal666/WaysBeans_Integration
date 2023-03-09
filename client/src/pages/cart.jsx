import BasicExample from "../component/header"
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from "react"


function Cart() {
    const [getCart, setGetCart] = useState([]);
    const [totalQty, setTotalQty] = useState(0);
    const [totalPrice, setTotalPrice] = useState(0);

    const fetchCart =() => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        setGetCart(dataCart);

        window.dispatchEvent(new Event("storage"));

        let total = 0;
        let totalQty = 0;

        dataCart.map((item) => {
            totalQty = totalQty + item.qty;
            total = total + item.price * item.qty;
        });
        setTotalQty(totalQty);
        setTotalPrice(total);
    }
    
    useEffect(() => {
        fetchCart();
    }, []); 

    const plusProduct =  (product) => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        const findCartIndex = dataCart.finIndex((cartProduct) => cartProduct.id === product.id);
        dataCart[findCartIndex].qty = dataCart[findCartIndex].qty = 1;

        localStorage.setItem("dataCart", JSON.stringify(dataCart));

        fetchCart();
    };

    const minProduct = (product) => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        const findCartIndex = dataCart.findIndex((cartProduct) => cartProduct.id === product.id);
        dataCart[findCartIndex].qty = dataCart[findCartIndex].qty - 1;
    
        localStorage.setItem("dataCart", JSON.stringify(dataCart));
    
        fetchCart();
      };    

      function deleteCart(id) {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        const newList = dataCart.filter((item) => item.id !== id);
        localStorage.setItem("dataCart", JSON.stringify(newList));
        fetchCart();
      }
      
      const payCart = () => {
        const dataCart = JSON.parse(localStorage.getItem("dataCart"));
        const dataTransaction = JSON.parse(localStorage.getItem("Transaction")) || [];
    
        const LoginUser = JSON.parse(localStorage.getItem("loginUser"));
        let newTransaction = {
          id: new Date().getTime(),
          date: new Date(),
          cart: dataCart,
          status: "Waiting Approve",
          email: LoginUser.email,
          fullName: LoginUser.fullName,
        };
        if (dataTransaction.length === 0) {
          localStorage.setItem("Transaction", JSON.stringify([newTransaction]));
        } else {
          dataTransaction.push(newTransaction)
          localStorage.setItem("Transaction", JSON.stringify(dataTransaction));
        }
      };

  return (
    <>
        <BasicExample/>
        <Container>
        <div style={{
            margin: "40px 0"
        }}>
            <h1 style={{color:"#6e4c3b"}}>My Cart</h1>
            <p style={{color:"#6e4c3b"}}>Review Your Order</p>
            <div style={{display: "flex", gap:"20px", width:"100%"}}>
                {getCart.map((item) => (
                    <div style={{
                        borderStyle: "solid none",
                        display: "flex",
                        width:"65%",
                        gap: "20px"
                    }}>
            <img src={item.photo} alt={item.name} style={{
                width: "90px",
                margin: "10px 0"
            }}></img>
                    <div>
                        <h5 style={{
                        margin: "20px 0", color:"#6e4c3b"
                    }}>{item.name}</h5>
                        <div style={{
                            display: "flex",
                            gap: "5px",
                        }}>
                            <button style={{marginBottom:"15px", border:"none", backgroundColor:"white"}} onClick={() => minProduct}>-</button>
                            <p style={{padding:"1px 10px", backgroundColor:"#f6e6da"}}>{item.qty}</p>
                            <button style={{marginBottom:"15px", border:"none", backgroundColor:"white"}} onClick={() => plusProduct}>+</button>
                        </div>
                    </div>
                            <div className="ms-auto my-auto" style={{ alignItems:"center"}}>
                                <p style={{color: "#d19558"}}>Rp.{item.price}</p>
                                <img src="/img/Vector2.png" alt="#" onClick={() => deleteCart(item.id)} style={{width: "20px", marginLeft:"50px"}}></img>
                            </div>
                </div>
            ))}
        <div style={{borderStyle: "solid none",padding:"10px 0",height:"100px", width:"40%"}}>
            <div style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{color: "#d19558"}}>Subtotal</p>
            <p style={{color: "#d19558"}}>Rp.{totalPrice}</p>
            </div>
        <div style={{display:"flex",justifyContent:"space-between"}}>
            <p style={{color: "#d19558"}}>Qty</p>
            <p style={{color: "#d19558"}}>{totalQty}</p>
        </div>
        <div style={{display:"flex",justifyContent:"space-between", marginTop:"10px"}}>
            <p style={{color: "#d19558"}}>Total</p>
            <p style={{color: "#d19558"}}>Rp. {totalPrice}</p>
        </div>
        <div className="d-flex justify-content-end">
        <button onClick={() => payCart() } style={{padding:"5px 90px", backgroundColor:"#6e4c3b", border:"none", borderRadius:"8px", color:"white"}}>Pay</button>
        </div>
        </div>
        </div>
        </div>
        </Container>
    </>
  );
}

export default Cart;