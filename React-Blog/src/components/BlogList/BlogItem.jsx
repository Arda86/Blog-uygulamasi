import PropTypes from "prop-types";
import "./BlogItem.css";

const BlogItem = ({ blog }) => {
  const { image, title, description, author, date } = blog;
  const formattedDate = new Date(date).toLocaleDateString();

  return (
    <div>
      <div className="blog-items">
        <h2 className="blog-titles">{title}</h2>
        <img className="blog-image" src={image} />
        <div>
          <p className="blog-description">{description}</p>
        </div>
        <span className="author">{author}</span>
        <p>{formattedDate}</p>
      </div>
    </div>
  );
};

BlogItem.propTypes = {
  blog: PropTypes.shape({
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
  }).isRequired,
};

export default BlogItem;
