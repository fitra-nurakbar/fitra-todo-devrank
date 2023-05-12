import styles from "@/styles/TodoList.module.css";
import DeleteIcon from "/static/media/delete-button.svg";
import TodoEmptyImage from "/static/media/todo-empty-state.png";
import EditButton from "/static/media/edit-button.svg";
import { useState } from "react";

export default function TodoList({ data, openFormModal, deleteItem }) {
  const [checkedItems, setCheckedItems] = useState({});

  const handleCheck = (event, itemId) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [itemId]: event.target.checked,
    }));
  };

  return (
    <>
      {data.length > 0 ? (
        <div className={styles.detail_content}>
          {data.map((todo, index) => (
            <div className={styles.content_item} key={index}>
              <div className={styles.option}>
                <input
                  id="togle-checked"
                  name="togle-checked"
                  type="checkbox"
                  onChange={(event) => handleCheck(event, todo.id)}
                  checked={checkedItems[todo.id] || false}
                />
                <label
                  htmlFor="togle-checked"
                  className={checkedItems[todo.id] && styles.checked}
                >
                  {todo.title}
                </label>
                <img src={EditButton} width={20} height={20} />
              </div>
              <img
                src={DeleteIcon}
                alt="delete"
                data-cy="detail-item-delete-button"
                onClick={() => deleteItem(todo.id)}
                width={24}
                height={24}
              />
            </div>
          ))}
        </div>
      ) : (
        <div className={styles.empty_item}>
          <img src={TodoEmptyImage} alt="empty" onClick={openFormModal} />
        </div>
      )}
    </>
  );
}
