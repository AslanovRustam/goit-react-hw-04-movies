import React, { Component } from "react";
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";
import s from "./FilmPendingView.module.css";

class FilmPendingView extends Component {
  render() {
    return (
      <Loader
        className={s.loader}
        type="Audio"
        color="#00BFFF"
        height={80}
        width={80}
      />
    );
  }
}

export default FilmPendingView;
