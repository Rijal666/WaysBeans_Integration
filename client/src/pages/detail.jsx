import Container from 'react-bootstrap/Container';
import BasicExample from "../component/header"
import cssModules from "../component/App.module.css";
import { useParams } from "react-router-dom";

function Detail() {
    const params = useParams();
    const id = parseInt(params.id);
    const detail = JSON.parse(localStorage.getItem("dataProduct"));
    const findProduct = detail.find((product) => product.id === id);


    const handleCart = () => {
      const dataCart = JSON.parse(localStorage.getItem("dataCart")) || [];
      const newProduct = {
        id: findProduct.id,
        name: findProduct.name,
        
        price: findProduct.price,
        photo: findProduct.photo,
        qty: 1,
      };

      const indexCart = dataCart.findIndex((item) => item.id === id);
      if (indexCart === -1) {
        dataCart.push(newProduct);
      } else {
        dataCart[indexCart].qty = dataCart[indexCart].qty+1
      }
      localStorage.setItem("dataCart", JSON.stringify(dataCart));
      window.dispatchEvent(new Event("storage"));
    };

  return (
    <>
    <BasicExample/> 
        <Container className={cssModules.Container}>
            <div  className={cssModules.Container2}>
                <img src={detail[id].image} alt='#' style={{width: "436px"}}></img>
                <div>
                <h1 className={cssModules.produk}>{detail[id].nameProduct}</h1>
                <p style={{color: "#d19558"}}>{detail[id].stock}</p>
                <p style={{textAlign: "justify"}}>Hampir semua referensi sepakat mengatakan bahwa kopi pertama kali ditemukan di Ethiopia, meskipun ada juga beberapa protes yang menyatakan bahwa Coffea arabica sebenarnya muncul pertama kali di bagian selatan Sudan. Karena para gembala Ethiopia adalah manusia pertama yang mengonsumsi kopi walau saat itu mereka baru mengonsumsi buah/cherry-nya saja, maka gagasan tentang “Ethiopia sebagai tempat asal kopi” pun semakin kuat.</p>
                <h3 className={cssModules.price}>{detail[id].price}</h3>
                <button className={cssModules.btn1} onClick={handleCart}>Add Cart</button>
                </div>
            </div>
        </Container>
    </>
  );
}

export default Detail;