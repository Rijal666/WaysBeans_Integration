import Form from 'react-bootstrap/Form';
import cssModules from "../component/App.module.css";

function FormFloatingCustom() {
  return (
    <>
    <div>
        <h1 className={cssModules.login}>Login</h1>
    </div>
      <Form.Floating className="mb-3">
        <Form.Control
          id="floatingInputCustom"
          type="email"
          placeholder="name@example.com"
        />
        <label htmlFor="floatingInputCustom">Email address</label>
      </Form.Floating>
      <Form.Floating>
        <Form.Control
          id="floatingPasswordCustom"
          type="password"
          placeholder="Password"
        />
        <label htmlFor="floatingPasswordCustom">Password</label>
      </Form.Floating>
    </>
  );
}

export default FormFloatingCustom;