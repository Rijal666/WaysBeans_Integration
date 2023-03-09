import Container from 'react-bootstrap/Container';
import BasicExample from "../component/header"


function Dprofile() {
  const getUser = JSON.parse(localStorage.getItem("loginUser"));

  return (
    <>
        <BasicExample/>
    <Container fluid>
      <div  style={{ margin:"50px", display:"flex", gap:"100px"}}>
        <div>
          <h1 style={{paddingBottom:"20px", color:"#613D2B"}}>My Profile</h1>
          <div style={{display:"flex", gap:"20px"}}>
            <img src='/img/Rectangle 12.png' alt='#' style={{
            width:"180px", borderRadius:"8px"
            }}></img>
            <div>
              <div>
                <h3 style={{color:"#613D2B"}}>Full Name</h3>
                <p>{getUser.fullname}</p>
              </div>
              <div>
                <h3 style={{color:"#613D2B"}}>Email</h3>
                <p>{getUser.email}</p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h1 style={{paddingBottom:"20px",color:"#613D2B"}}>My Transaction</h1>
          <div>
          <div style={{ backgroundColor:"#F6E6DA", display:"flex" , marginBottom:"10px"}}>
            <img src='/img/rectangle 4.png' alt='#' style={{width:"120px", margin:"10px 20px"}}></img>
            <div style={{display:"flex"}}>
              <div>
              <h5 style={{margin:"20px 0", marginBottom:"0", fontWeight:"bold", color:"#613D2B"}}>Guetamala beans</h5>
              <div style={{display:"flex",marginBottom:"10px", gap:"8px"}}>
                <h6 style={{color:"#613D2B"}}>Saturday,</h6>
                <p style={{fontSize:"15px", color:"#613D2B"}}> 5 March 2020</p>
              </div>
                <p style={{marginBottom:"0", color:"#974A4A"}}>Price : Rp.300.900</p>
                <p style={{marginBottom:"0",color:"#974A4A"}}>Qty : 2</p>
                <h6 style={{color:"#974A4A"}}>Sub Total : 200.900</h6>
                </div>
            <div>
              <img src='/img/icon.png' alt='#' style={{width:"100px", margin:"20px 0 0 70px"}}></img>
              <div>
              <img src='/img/Group.png' alt='#' style={{width:"70px", margin:"10px 0 20px 85px"}}></img>
              <div style={{backgroundColor:"#F7dec4", borderRadius:"8px", margin:"0px 50px 0 60px"}}>
                <p style={{color:"#FF9900", display:"flex", justifyContent:"center",}}>Waiting Approve</p>
              </div>
              </div>
            </div>
            </div>
          </div>

          <div style={{ backgroundColor:"#F6E6DA", display:"flex", marginBottom:"10px"}}>
            <img src='/img/rectangle 4.png' alt='#' style={{width:"120px", margin:"10px 20px"}}></img>
            <div style={{display:"flex"}}>
              <div>
              <h5 style={{margin:"20px 0", marginBottom:"0", fontWeight:"bold", color:"#613D2B"}}>Guetamala beans</h5>
              <div style={{display:"flex",marginBottom:"10px", gap:"8px"}}>
                <h6 style={{color:"#613D2B"}}>Saturday,</h6>
                <p style={{fontSize:"15px", color:"#613D2B"}}> 5 March 2020</p>
              </div>
                <p style={{marginBottom:"0", color:"#974A4A"}}>Price : Rp.300.900</p>
                <p style={{marginBottom:"0", color:"#974A4A"}}>Qty : 2</p>
                <h6 style={{color:"#974a4a"}}>Sub Total : 200.900</h6>
                </div>
            <div>
              <img src='/img/icon.png' alt='#' style={{width:"100px", margin:"20px 0 0 70px"}}></img>
              <div>
              <img src='/img/Group.png' alt='#' style={{width:"70px", margin:"10px 0 20px 85px"}}></img>
              <div style={{backgroundColor:"#F7dec4", borderRadius:"8px", margin:"0px 50px 0 60px"}}>
                <p style={{color:"#FF9900", display:"flex", justifyContent:"center"}}>Waiting Approve</p>
              </div>
              </div>
            </div>
            </div>
          </div>

          <div style={{ backgroundColor:"#F6E6DA", display:"flex", marginBottom:"10px"}}>
            <img src='/img/rectangle 4.png' alt='#' style={{width:"120px", margin:"10px 20px"}}></img>
            <div style={{display:"flex"}}>
              <div>
              <h5 style={{margin:"20px 0", marginBottom:"0", fontWeight:"bold",color:"#613D2B"}}>Guetamala beans</h5>
              <div style={{display:"flex",marginBottom:"10px", gap:"8px"}}>
                <h6 style={{color:"#613D2B"}}>Saturday,</h6>
                <p style={{fontSize:"15px", color:"#613D2B"}}> 5 March 2020</p>
              </div>
                <p style={{marginBottom:"0",color:"#974a4a"}}>Price : Rp.300.900</p>
                <p style={{marginBottom:"0",color:"#974a4a"}}>Qty : 2</p>
                <h6 style={{color:"#974a4a"}}>Sub Total : 200.900</h6>
                </div>
            <div>
              <img src='/img/icon.png' alt='#' style={{width:"100px", margin:"20px 0 0 70px"}}></img>
              <div>
              <img src='/img/Group.png' alt='#' style={{width:"70px", margin:"10px 0 20px 85px"}}></img>
              <div style={{backgroundColor:"#F7dec4", borderRadius:"8px", margin:"0px 50px 0 60px"}}>
                <p style={{color:"#FF9900", display:"flex", justifyContent:"center",}}>Waiting Approve</p>
              </div>
              </div>
            </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </Container>
    </>
  );
}

export default Dprofile;