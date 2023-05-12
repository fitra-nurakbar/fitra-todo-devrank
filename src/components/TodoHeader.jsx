import Button from "@/components/Button";
import styles from "@/styles/TodoHeader.module.css";
import { Link } from "react-router-dom";
import EditButton from "/static/media/edit-button.svg";
import TodoBackButton from "/static/media/todo-back-button.svg";

export default function TodoHeader({ onClick }) {
  return (
    <div className={styles.container}>
      <div className={styles.todoTitle}>
        <Link to={"/"}>
          <img src={TodoBackButton} alt="back button" width={32} height={32} />
        </Link>
        <h2>Todo Header</h2>
        <img src={EditButton} width={24} height={24} />
      </div>
      <div className={styles.todoAction}>
        <Button onClick={onClick}>tambah</Button>
      </div>
    </div>
  );
}
