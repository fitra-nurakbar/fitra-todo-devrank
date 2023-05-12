import Button from "@/components/Button";
import styles from "@/styles/TodoHeader.module.css";

export default function ActivityHeader({ onClick }) {
  return (
    <div className={styles.container}>
      <h2>Activity</h2>
      <Button onClick={onClick}>tambah</Button>
    </div>
  );
}
