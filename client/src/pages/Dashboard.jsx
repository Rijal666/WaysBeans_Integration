import Table from 'react-bootstrap/Table';
import BasicExample from "../component/header"
import Container from 'react-bootstrap/Container';


function Dashboard() {
  return (
    <>
    <BasicExample/>
    <Container fluid>
        <div  style={{margin:"20px 90px"}}>
        <h1 style={{color:"#613D2B", margin:"50px 0"}}>Income transaction</h1>
            <div style={{margin:"0 100px"}}>
    <Table bordered hover size="sm">
      <thead>
        <tr style={{backgroundColor:"#e5e5e5"}}>
          <th>No</th>
          <th>Name</th>
          <th>Address</th>
          <th>Postcode</th>
          <th>Products Order</th>
          <th>Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Sugeng No Pants</td>
          <td>Cileungsi</td>
          <td>16280</td>
          <td>RWANDA Beans</td>
          <td style={{color:"#FF9900"}}>Waiting Approve</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Serang</td>
          <td>42111</td>
          <td>ETHIOPIA Beans</td>
          <td style={{color:"#78A85A"}}>Success</td>
        </tr>
        <tr>
          <td>3</td>
          <td>Aziz Union</td>
          <td>Bekasi</td>
          <td>13450</td>
          <td>GUETEMALA Beans</td>
          <td style={{color:"#E83939"}}>Cancel</td>
        </tr>
        <tr>
          <td>4</td>
          <td>Lae Tanjung Balai</td>
          <td>Tanjung Balai</td>
          <td>21331</td>
          <td>NICARAGUA Beans</td>
          <td style={{color:"#00D1FF"}}>On The Way</td>
        </tr>
      </tbody>
    </Table>
            </div>
        </div>
    </Container>
    </>
  );
}

export default Dashboard;