import { FaArrowRight } from "react-icons/fa";
import Card from "react-bootstrap/Card";
import { IoMdTime } from "react-icons/io";
import PropTypes from "prop-types";
import "./ArticleItem.css";
import { Link } from "react-router-dom";

function ArticleItem({ image, title, desc, writter, readingtime, id }) {
  ArticleItem.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    desc: PropTypes.string.isRequired,
    writter: PropTypes.string.isRequired,
    readingtime: PropTypes.number.isRequired,
    id: PropTypes.string.isRequired,
  };

  return (
    <div>
      <Card>
        <div>
          <Card.Img
            variant="top"
            className="img-fluid abi"
            src={image}
            alt={title}
          />
        </div>
        <Card.Body>
          <Card.Title className="py-2">{title}</Card.Title>
          <Card.Text className="desc">{desc}</Card.Text>
          <Link style={{ textDecoration: "none" }} to={`/article/${id}`}>
            <span className="readMore">
              <span>continue</span>
              <span>
                <FaArrowRight />
              </span>
            </span>
          </Link>
        </Card.Body>
        <Card.Footer className="d-flex justify-content-between align-content-center py-3">
          <span>author: {writter}</span>
          <span>
            {readingtime} minutes <IoMdTime />
          </span>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default ArticleItem;
