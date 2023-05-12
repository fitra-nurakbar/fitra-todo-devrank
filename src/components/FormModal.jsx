import Button from "@/components/Button";
import styles from "@/styles/FormModal.module.css";
import CloseButton from "/static/media/modal-add-close-button.svg";
import { useState } from "react";

export default function FormModal({ closeModal, setNewTodo, createTodo }) {
  const [text, setText] = useState("");
  const handleOutsideClick = (e) => {
    if (!e.target.closest(`.${styles.modal}`)) {
      // jika element yang diklik berada di luar container, panggil function untuk menutup modal
      closeModal();
    }
  };

  return (
    <div className={styles.outside} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <div className={styles.modalHeader}>
          <h3>Tambah List Item</h3>
          <img onClick={closeModal} src={CloseButton} alt="close icon" />
        </div>
        <div className={styles.modalBody}>
          <label htmlFor="name-list">Nama List Item</label>
          <input type="text" id="name-list" name="name-list" placeholder="Tambahkan nama list item" />
          <label>Priority</label>
        </div>
        <div className={styles.modalFooter}>
          <Button onClick={createTodo}>Simpan</Button>
        </div>
      </div>
    </div>
  );
}
