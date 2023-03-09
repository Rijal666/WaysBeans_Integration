import BasicExample from "../component/header"
import Container from 'react-bootstrap/Container';
import cssModules from "../component/App.module.css";
import Card from 'react-bootstrap/Card';
import { Link } from "react-router-dom";


export default function Home () {
   
    const getProduct = JSON.parse(localStorage.getItem("getProduct"));
    return (
      <div>
      <>
            <BasicExample/> 
            <Container>
                <div>
                    <img src="/img/rectangle 3.png" alt="#" className={cssModules.img3}/>
                    <img src="/img/rectangle 2.png" alt="#" className={cssModules.img} />
                </div>
                <div className={cssModules.card}>
      
            {getProduct !== null && getProduct.map((item, id) => {
              return(
            <Link to={`/detail/${id}`} key={id} style={{textDecoration: "none"}}>
                  <Card  style={{ width: "15rem" }} className="rounded-0">
                    <Card.Img variant="top" src={item.image} className="rounded-0"/>
                    <Card.Body style={{backgroundColor: "#f6e6da"}}>
                      <Card.Title className={cssModules.name}>{item.nameProduct}</Card.Title>
                      <p style={{marginBottom: "0", color: "#d19558"}}>{item.price}</p>
                      <p style={{marginBottom: "0", color: "#d19558"}}>{item.stock}</p>
                    </Card.Body>
                  </Card>
                </Link>

              )
            })}
                </div>
            </Container>
            
        </>
    )
            </div>)
  }