import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";
import { Button, Col, Container, Row } from "react-bootstrap";
import { useNavigate, useParams } from "react-router-dom";
import "./Article.css";
import { BsPencilSquare } from "react-icons/bs";
import { FiClock } from "react-icons/fi";
import { BiCategoryAlt } from "react-icons/bi";
import { FaTrashAlt } from "react-icons/fa";
import { MdOutlineEditCalendar } from "react-icons/md";
import Swal from "sweetalert2";
function Article() {
  const articleItem = useParams().id;
  const [articleData, setArticleData] = useState({});
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get(`http://localhost:8001/articls/${articleItem}`)
      .then((res) => setArticleData(res.data));
  }, [articleItem]);
  const editArticleHandler = () => {
    navigate(`/edit-article/${articleItem}`);
  };
  const deleteHandler = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "Do you want to delete this article?",
      icon: "warning",
      showCancelButton: true,
      showCancelButtonText: "No",
      confirmButtonColor: "#F9AA33",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios.delete(`http://localhost:8001/articls/${articleItem}`);
        Swal.fire({
          title: "Deleted!",
          text: "Your article has been successfully deleted.",
          icon: "success",
          confirmButtonColor: "#F9AA33",
        });
        axios;

        navigate("/");
      }
    });
  };

  return (
    <>
      <Container className="py-3">
        <Row className="py-4">
          <Col md={7} className="py-2 d-flex align-items-center">
            <p>{articleData.desc}</p>
          </Col>
          <Col md={5} className="d-flex justify-content-center py-4 py-md-2">
            <div className="parentCard">
              <div className="childCard">
                <div className="childCard-footer">
                  <img className="img-fluid" src={articleData.image} alt="" />
                </div>
                <h4 style={{ margin: "4px" }} className="text-center">
                  {articleData.title}
                </h4>
              </div>
              <div className="py-3">
                <div className="py-1 px-3">
                  <span>
                    <BsPencilSquare />
                  </span>
                  <span>
                    <b>Writter</b> : {articleData.writter}
                  </span>
                </div>
                <div className="py-1 px-3">
                  <span>
                    <FiClock />
                  </span>
                  <span>
                    <b>Readingtime</b> : {articleData.readingTime} min
                  </span>
                </div>
                <div className="py-1 px-3">
                  <span>
                    <BiCategoryAlt />
                  </span>
                  <span>
                    <b>Category</b> : {articleData.category}
                  </span>
                </div>
              </div>
              <div className="buttonParent py-2 d-flex align-content-center justify-content-center">
                <Button
                  onClick={editArticleHandler}
                  type="button"
                  style={{
                    outline: "#F9AA33",
                    border: "1px solid #F9AA33",
                    color: "#F9AA33",
                  }}
                  className="calenderButton"
                >
                  <span>Edit article</span>
                  <span>
                    <MdOutlineEditCalendar size={"20px"} />
                  </span>
                </Button>
                <Button
                  onClick={deleteHandler}
                  type="button"
                  variant="outline-danger"
                  className="trashButton"
                >
                  <span>Delete article</span>
                  <span>
                    <FaTrashAlt />
                  </span>
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Article;
