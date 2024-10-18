import { Col, Container, Row } from "react-bootstrap";
import ArticleItem from "../../components/articleItem/ArticleItem";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
function Home() {
  const [Articles, setArticles] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:8001/articls")
      .then((res) => setArticles(res.data));
  }, []);
  return (
    <div>
      <Container>
        <h1 className="serif" style={{ marginTop: "20px" }}>
          List of articles
        </h1>
        <Row className="row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 gy-4 py-3">
          {Articles.map((item) => (
            <Col key={item.id}>
              <ArticleItem {...item} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
}

export default Home;
