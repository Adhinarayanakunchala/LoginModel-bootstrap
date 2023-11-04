import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { LockFill, PersonFill } from "react-bootstrap-icons";
import "./App.css"; // Import a custom CSS file for additional styling

function App() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card">
            <div className="card-header" id="card-header">
              Login
            </div>
            <div className="card-body">
              <Button variant="primary" onClick={handleShow}>
                Open Login Modal
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Modal show={show} onHide={handleClose} dialogClassName="modal-custom">
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <div className="form-group">
              <label htmlFor="username">Username</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-primary text-white">
                    <PersonFill />
                  </span>
                </div>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  placeholder="Enter your username"
                />
              </div>
            </div>
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="input-group">
                <div className="input-group-prepend">
                  <span className="input-group-text bg-primary text-white">
                    <LockFill />
                  </span>
                </div>
                <input
                  type="password"
                  className="form-control"
                  id="password"
                  placeholder="Enter your password"
                />
              </div>
            </div>
            <Button variant="primary" type="submit">
              Login
            </Button>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default App;
