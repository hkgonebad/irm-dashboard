import { useState } from "react";
import { Form, Offcanvas } from "react-bootstrap";
import { FiEye, FiTrash2, FiMessageSquare } from "react-icons/fi";
import { NavLink } from "react-router-dom";

const RequestList = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="table-responsive">
        <table className="table table-striped table-hover">
          <thead>
            <tr>
              {/*  */}
              <th>Sr.No</th>
              <th>Request ID</th>
              <th>Raised By</th>
              <th>Assigned to</th>
              <th>Request Date</th>
              <th>Status</th>
              <th>Business Comments</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>01</td>
              <td>RDRR1001</td>
              <td>Priyanka Mohan</td>
              <td>Shailesh Naik</td>
              <td>07/01/2024</td>
              <td>
                <span className="badge bg-warning">In-Progress</span>
              </td>
              <td>N/A</td>
              <td>
                <div className="actions">
                  <NavLink to="/requests/view" className="btn btnView">
                    <FiEye />
                  </NavLink>
                  <a href="#!" className="btn btnDelete">
                    <FiTrash2 />
                  </a>
                  <a href="#!" className="btn btnComments" onClick={handleShow}>
                    <FiMessageSquare />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>02</td>
              <td>RDRR1002</td>
              <td>Priyanka Mohan</td>
              <td>Shailesh Naik</td>
              <td>07/01/2024</td>
              <td>
                <span className="badge bg-success">Approved</span>
              </td>
              <td>Completed</td>
              <td>
                <div className="actions">
                  <NavLink to="/requests/view" className="btn btnView">
                    <FiEye />
                  </NavLink>
                  <a href="#!" className="btn btnDelete">
                    <FiTrash2 />
                  </a>
                  <a href="#!" className="btn btnComments" onClick={handleShow}>
                    <FiMessageSquare />
                  </a>
                </div>
              </td>
            </tr>
            <tr>
              <td>03</td>
              <td>RDRR1003</td>
              <td>Priyanka Mohan</td>
              <td>Shailesh Naik</td>
              <td>07/01/2024</td>
              <td>
                {" "}
                <span className="badge bg-danger">Rejected</span>
              </td>
              <td>Rejected</td>
              <td>
                <div className="actions">
                  <NavLink to="/requests/view" className="btn btnView">
                    <FiEye />
                  </NavLink>
                  <a href="#!" className="btn btnDelete">
                    <FiTrash2 />
                  </a>
                  <a href="#!" className="btn btnComments" onClick={handleShow}>
                    <FiMessageSquare />
                  </a>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Add Comment */}
      <Offcanvas show={show} onHide={handleClose} placement="bottom" name="Add Comment">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Add Comment</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          {/* Text Field to appear on Click of any Notification */}
          <Form.Group className="mb-3">
            <Form.Label>Comments</Form.Label>
            <Form.Control as="textarea" rows={3} type="text" placeholder="" />
          </Form.Group>
          <Form.Group className="mb-3 text-end">
            <button className="btn btn-primary">Save</button>
          </Form.Group>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default RequestList;
