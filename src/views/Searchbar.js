import { useState } from "react";
import { toast } from "react-toastify";
import s from "../views/stylesViews.module.css";

function Searchbar({ onSubmit }) {
  const [filmName, setfilmName] = useState("");

  //получение значения input
  const handleNameChange = (event) => {
    // const imageQuery = event.currentTarget.value.toLowerCase();
    setfilmName(event.currentTarget.value.toLowerCase());
  };
  //отправка значения из формы
  const handleSubmit = (event) => {
    event.preventDefault();
    if (filmName.trim() === "") {
      toast("Please enter the query!");
      return;
    }
    // this.props.onSubmit - вызывает props из App под именем onSubmit
    onSubmit(filmName);
    setfilmName("");
  };
  return (
    <form className="SearchForm" onSubmit={handleSubmit}>
      <input
        className={s.input}
        type="text"
        name="imageName"
        value={filmName}
        onChange={handleNameChange}
        autocomplete="off"
        autofocus
        placeholder="Search movie by name"
      />
      <button type="submit" className={s.button}>
        <span className="SearchForm-button-label">Search</span>
      </button>
    </form>
  );
}

export default Searchbar;
