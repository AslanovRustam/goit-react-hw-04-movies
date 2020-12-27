import s from "../views/stylesViews.module.css";
import { toast } from "react-toastify";

export default function MoviesView() {
  return (
    <>
      <form>
        <label>
          {" "}
          Please enter the query
          <input className={s.input}></input>
          <button type="submit" className={s.button}>
            Search
          </button>
        </label>
      </form>
    </>
  );
}
