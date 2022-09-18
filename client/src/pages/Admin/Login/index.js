import React, { useEffect, useState } from "react";
import Logo from "assets/images/layout/logo.png";
import "./style.css";
import { Button, Form } from "react-bootstrap";
import { withRouter } from "hook/withRouter";
import { ModelView } from "./model";
import { useDispatch } from "react-redux";
import { loginAction } from "store/action/kyc";
const LoginComponent = (props) => {
  const [data, setData] = useState({
    username: "",
    password: ""
  });

  const dispatch = useDispatch();
  const handleOnChange = (name, value) => {
    setData((prevState) => ({ ...prevState, [name]: value }));
    // data[name] = value;
  };
  const handleSubmit = () => {
    console.log("data", data);
    dispatch(loginAction(data));
  };

  const fetchingData = async () => {
    const response = await fetch("/public/project?type=1");
    console.log("response", response);
  };
  useEffect(() => {
    fetchingData();
  }, []);

  return (
    <section className="h-100 gradient-form" style={{ backgroundColor: "#eee" }}>
      <div className="container py-5 h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col-xl-10">
            <div className="card rounded-3 text-black">
              <div className="row g-0">
                <div className="col-lg-6">
                  <div className="card-body p-md-5 mx-md-4">
                    <div className="text-center">
                      <img className="mt-1 mb-5 pb-1" src={Logo} style={{ width: 185 }} alt="logo" />
                    </div>
                    <Form>
                      <Form.Group className="form-outline mb-4" controlId="formBasicEmail">
                        <Form.Label>Username</Form.Label>
                        <Form.Control
                          type="text"
                          placeholder="Enter Username"
                          onChange={(event) => {
                            handleOnChange("username", event.target.value);
                          }}
                        />
                      </Form.Group>
                      <Form.Group className="form-outline mb-4" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                          type="password"
                          placeholder="Enter password"
                          onChange={(event) => {
                            handleOnChange("password", event.target.value);
                          }}
                        />
                      </Form.Group>
                      <div className="text-center pt-1 mb-5 pb-1">
                        <Button
                          className="btn btn-primary btn-block fa-lg gradient-custom-2 mb-3"
                          onClick={(e) => {
                            e.preventDefault();
                            handleSubmit();
                          }}
                        >
                          Log in
                        </Button>
                      </div>
                    </Form>
                  </div>
                </div>
                <div className="col-lg-6 d-flex align-items-center gradient-custom-2">
                  <div className="text-white px-3 py-4 p-md-5 mx-md-4">
                    <h4 className="mb-4">We are more than just a company</h4>
                    <p className="small mb-0">
                      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut
                      labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris
                      nisi ut aliquip ex ea commodo consequat.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default withRouter(LoginComponent);
