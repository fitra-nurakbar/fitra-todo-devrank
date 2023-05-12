import styles from "@/styles/ModalDelete.module.css";
import Button from "@/components/Button";
import WarningIcon from "/static/media/modal-delete-icon.svg";

export default function DeleteConfirmModal({ type, selected, closeModal, onDelete }) {
  const handleOutsideClick = (e) => {
    if (!e.target.closest(`.${styles.modal}`)) {
      // jika element yang diklik berada di luar container, panggil function untuk menutup modal
      closeModal();
    }
  };

  return (
    <div className={styles.outside} onClick={handleOutsideClick}>
      <div className={styles.modal}>
        <div className={styles.modalBody}>
          <img src={WarningIcon} alt="warning" />
          <p>
            Apakah anda yakin menghapus {type} <span>“{selected.title}”?</span>
          </p>
        </div>
        <div className={styles.modalFooter}>
          <Button onClick={closeModal} variant={"close"}>batal</Button>
          <Button onClick={() => onDelete(selected.id)} variant={"delete"}>
            hapus
          </Button>
        </div>
      </div>
    </div>
  );
}
