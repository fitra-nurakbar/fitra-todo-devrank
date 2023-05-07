import styles from "@/styles/Button.module.css";
import PlusIcon from "/static/media/tabler_plus.svg";

export default function Button({ onClick, children, text, variant }) {
  return (
    <button
      className={`${styles.button} ${
        variant ? styles[variant] : styles.primary
      }`}
      onClick={onClick}
    >
      {children == "tambah" || text == "tambah" ? (
        <img src={PlusIcon} alt="plus icon" />
      ) : null}
      {children || text}
    </button>
  );
}
