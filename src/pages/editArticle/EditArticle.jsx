import { useState } from "react";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import axios from "axios";
import { Button, Form } from "react-bootstrap";
import Swal from "sweetalert2";
function EditArticle() {
  const articleItem = useParams().id;
  const [articleData, setArticleData] = useState({});
  useEffect(() => {
    axios
      .get(`http://localhost:8001/articls/${articleItem}`)
      .then((res) => setArticleData(res.data));
  }, [articleItem]);
  const editArticleHandler = () => {
    axios
      .put(`http://localhost:8001/articls/${articleItem}`, articleData)
      .then(() => {
        Swal.fire({
          title: "Good job!",
          text: "You have successfully edited the article!",
          icon: "success",
          timerProgressBar: true,
          timer: 2000, // مدت زمان نمایش پیام
        });
      })
      .catch(() => {
        Swal.fire({
          title: "Error!",
          text: "There was an error editing the article.",
          icon: "error",
        });
      });
  };
  const formHandler = (e) => {
    setArticleData({ ...articleData, [e.target.name]: e.target.value });
  };
  return (
    <>
      <div className="formContainer">
        <Form>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Title article</Form.Label>
            <Form.Control
              value={articleData.title}
              name="title"
              onChange={formHandler}
              type="text"
              placeholder="Enter the title of the article"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Short description</Form.Label>
            <Form.Control
              value={articleData.desc}
              name="desc"
              onChange={formHandler}
              type="text"
              placeholder="Enter a short description"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Author of the article</Form.Label>
            <Form.Control
              value={articleData.writter}
              name="writter"
              onChange={formHandler}
              type="text"
              placeholder="Enter the author of the article"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>The subject of the article</Form.Label>
            <Form.Control
              value={articleData.category}
              name="category"
              onChange={formHandler}
              type="text"
              placeholder="Enter the subject of the article"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Photo of the article</Form.Label>
            <Form.Control
              value={articleData.image}
              name="image"
              onChange={formHandler}
              type="text"
              placeholder="Enter the photo of the article"
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Reading time</Form.Label>
            <Form.Control
              value={articleData.readingtime}
              name="readingtime"
              onChange={formHandler}
              type="number"
              placeholder=""
            />
          </Form.Group>

          <Button
            onClick={editArticleHandler}
            style={{ backgroundColor: "#F9AA33", border: "1px solid #F9AA33" }}
            type="button"
          >
            Edit article
          </Button>
        </Form>
      </div>
    </>
  );
}

export default EditArticle;
