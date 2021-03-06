import PropTypes from "prop-types";
import s from "./FilmErrorView.module.css";

function FilmErrorView({ message }) {
  return (
    <div role="alert">
      <p className={s.message}>
        Sorry, we cannot process your request. Error: {message}
      </p>
    </div>
  );
}

FilmErrorView.propTypes = {
  message: PropTypes.string.isRequired,
};

export default FilmErrorView;
