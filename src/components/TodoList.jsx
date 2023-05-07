import TodoEmptyImage from "/static/media/todo-empty-state.png";
import styles from "@/styles/TodoList.module.css"

export default function TodoList() {
  return (
    <>
      <div className={styles.emptyItem}>
        <img src={TodoEmptyImage} alt="empty" />
      </div>
    </>
  );
}
