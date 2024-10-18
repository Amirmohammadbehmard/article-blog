import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import "./AddArticle.css";
import axios from "axios";
import { useState } from "react";
import Swal from "sweetalert2";
function AddArticle() {
  const [formData, setFormData] = useState({});
  const resetFormData = () => {
    setFormData({
      title: "",
      desc: "",
      image: "",
      writter: "",
      readingtime: "",
      category: "",
    });
  };
  const addArticleHandler = () => {
    axios
      .post("http://localhost:8001/articls", formData)
      .then((res) => {
        if (res.status === 201) {
          Swal.fire({
            title: "Good job!",
            timer: 1500,
            timerProgressBar: true,
            confirmButtonColor: "#F9AA33"
          });
        }
      })
      .catch(() => {
        Swal.fire({
          title: "Something wrong!",
          icon: "error",
          timer: 1500,
          timerProgressBar: true,
          confirmButtonColor: "#F9AA33"
        });
      });
    resetFormData();
  };

  const formHandler = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="formContainer">
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Title article</Form.Label>
          <Form.Control
            value={formData.title}
            name="title"
            onChange={formHandler}
            type="text"
            placeholder="Enter the title of the article"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Short description</Form.Label>
          <Form.Control
            value={formData.desc}
            name="desc"
            onChange={formHandler}
            type="text"
            placeholder="Enter a short description"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Author of the article</Form.Label>
          <Form.Control
            value={formData.writter}
            name="writter"
            onChange={formHandler}
            type="text"
            placeholder="Enter the author of the article"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>The subject of the article</Form.Label>
          <Form.Control
            value={formData.category}
            name="category"
            onChange={formHandler}
            type="text"
            placeholder="Enter the subject of the article"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo of the article</Form.Label>
          <Form.Control
            value={formData.image}
            name="image"
            onChange={formHandler}
            type="text"
            placeholder="Enter the photo of the article"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Reading time</Form.Label>
          <Form.Control
            value={formData.readingtime}
            name="readingtime"
            onChange={formHandler}
            type="number"
            placeholder=""
          />
        </Form.Group>

        <Button onClick={addArticleHandler} style={{backgroundColor:"#F9AA33",border:'1px solid #F9AA33'}} type="button">
          Create article
        </Button>
      </Form>
    </div>
  );
}

export default AddArticle;
