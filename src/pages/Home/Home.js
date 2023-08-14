import React, { useContext, useEffect, useState } from "react";
import "./home.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Dropdown from "react-bootstrap/Dropdown";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  addData,
  dltData,
  updateData,
} from "../../components/context/ContextProvide";
import Tables from "../../components/Tables/Tables";
import Spiner from "../../components/Spiner/Spiner";
import Alert from "react-bootstrap/Alert";
import { deletfunc, exporttocsvfunc, usergetfunc } from "../../services/Apis";

const Home = () => {
  const [userdata, setUserData] = useState([]);
  const [showSpin, setShowSpin] = useState(true);
  const [search, setSearch] = useState("");
  const [gender, setGender] = useState("All");
  const [status, setStatus] = useState("All");
  const [sort, setSort] = useState("New");
  const [page, setPage] = useState(1);
  const [pageCount, setPageCount] = useState(0);

  const { useradd, setUserAdd } = useContext(addData);
  const { update, setUpdate } = useContext(updateData);
  const { deletedata, setDLtdata } = useContext(dltData);

  const navigate = useNavigate();
  const addUser = () => {
    navigate("/register");
  };

  // Get User
  const userGet = async () => {
    const response = await usergetfunc(search, gender, status, sort, page);
    // console.log(response.data.Pagination.pageCount);
    if (response.status === 200) {
      setUserData(response.data.userdata);
      setPageCount(response.data.Pagination.pageCount);
    } else {
      console.log("Error by Himanshu LOL! To Get The User Data:");
    }
  };

  // Delete User
  const deleteUser = async (id) => {
    const response = await deletfunc(id);
    if (response.status === 200) {
      userGet();
      setDLtdata(response.data);
    } else {
      toast.error("error");
    }
  };

  // Export user
  const exportuser = async () => {
    const response = await exporttocsvfunc();
    // console.log(response);
    if (response.status === 200) {
      window.open(response.data.downloadUrl, "blank");
    } else {
      toast.error("Error!");
    }
  };

  // Pagination:
  // Handle Previous Button
  const handlePrevious = () => {
    setPage(() => {
      if (page === 1) return page;
      return page - 1;
    });
  };

  // Handle Next Button
  const handleNext = () => {
    setPage(() => {
      if (page === pageCount) return page;
      return page + 1;
    });
  };

  useEffect(() => {
    userGet();
    setTimeout(() => {
      setShowSpin(false);
    }, 1200);
  }, [search, gender, status, sort, page]);
  return (
    <>
      {useradd ? (
        <Alert variant="success" onClose={() => setUserAdd("")} dismissible>
          {useradd.fname.toUpperCase()} Successfully Added.
        </Alert>
      ) : (
        ""
      )}
      {update ? (
        <Alert variant="primary" onClose={() => setUpdate("")} dismissible>
          {update.fname.toUpperCase()} Successfully Updated.
        </Alert>
      ) : (
        ""
      )}
      {deletedata ? (
        <Alert variant="danger" onClose={() => setDLtdata("")} dismissible>
          {deletedata.fname.toUpperCase()} Succesfully Delete
        </Alert>
      ) : (
        ""
      )}
      <div className="container">
        <div className="main_div">
          {/* Search add btn */}
          <div className="search_add mt-4 d-flex justify-content-between">
            <div className="serach col-lg-4">
              <Form className="d-flex">
                <Form.Control
                  type="search"
                  placeholder="Search"
                  className="me-2"
                  aria-label="Search"
                  onChange={(e) => setSearch(e.target.value)}
                />
                <Button variant="success" className="search_btn">
                  Search
                </Button>
              </Form>
            </div>
            <div className="add_btn">
              <Button variant="dark" onClick={addUser}>
                <i class="fa-solid fa-plus"></i>&nbsp; Add User
              </Button>
            </div>
          </div>
          {/* Export, Gneter and Status */}
          <div className="filter_div mt-5 d-flex justify-content-between flex-wrap">
            <div className="export_csv">
              <Button
                variant="dark"
                className="export_btn"
                onClick={exportuser}
              >
                Export To CSV
              </Button>
            </div>
            <div className="filter_gender">
              <div className="filter">
                <h3>Filter By Gender</h3>
                <div className="gender d-flex justify-content-around">
                  <Form.Check
                    type={"radio"}
                    label={"All"}
                    name="gender"
                    value={"All"}
                    onChange={(e) => setGender(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Male"}
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={"Male"}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Female"}
                    name="gender"
                    onChange={(e) => setGender(e.target.value)}
                    value={"Female"}
                  />
                </div>
              </div>
            </div>

            {/* Sort by Value */}
            <div className="filter_newold">
              <h3>Filter By Value</h3>
              <Dropdown className="text-center">
                <Dropdown.Toggle className="dropdown_btn" id="dropdown-basic">
                  <i class="fa-solid fa-sort"></i>
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => setSort("New")}>
                    New
                  </Dropdown.Item>
                  <Dropdown.Item onClick={() => setSort("Old")}>
                    Old
                  </Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
            {/* Filter by Status */}
            <div className="filter_status">
              <div className="status">
                <h3>Filter By Status</h3>
                <div className="status_radio d-flex justify-content-between flex-wrap">
                  <Form.Check
                    type={"radio"}
                    label={"All"}
                    name="status"
                    value={"All"}
                    onChange={(e) => setStatus(e.target.value)}
                    defaultChecked
                  />
                  <Form.Check
                    type={"radio"}
                    label={"Active"}
                    name="status"
                    value={"Active"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                  <Form.Check
                    type={"radio"}
                    label={"InActive"}
                    name="status"
                    value={"InActive"}
                    onChange={(e) => setStatus(e.target.value)}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {showSpin ? (
          <Spiner />
        ) : (
          <Tables
            userdata={userdata}
            deleteUser={deleteUser}
            userGet={userGet}
            handlePrevious={handlePrevious}
            handleNext={handleNext}
            page={page}
            pageCount={pageCount}
            setPage={setPage}
          />
        )}
      </div>
    </>
  );
};

export default Home;
