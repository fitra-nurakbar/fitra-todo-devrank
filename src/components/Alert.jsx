import styles from "@/styles/Alert.module.css";
import InformationIcon from "/static/media/modal-information-icon.svg";

export default function Alert({ closeAlert }) {
  const handleOutsideClick = (e) => {
    if (!e.target.closest(`.${styles.container}`)) {
      // jika element yang diklik berada di luar container, panggil function untuk menutup alert
      closeAlert();
    }
  };

  return (
    <div className={styles.outside} onClick={handleOutsideClick}>
      <div className={styles.container}>
        <img src={InformationIcon} alt="information" />
        <span>Activity berhasil dihapus</span>
      </div>
    </div>
  );
}
