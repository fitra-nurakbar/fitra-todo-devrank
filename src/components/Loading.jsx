import styles from "@/styles/Loading.module.css";

export default function Loading() {
  return (
    <div className={styles.outside}>
      <div className={styles.loading}>
        Loading...
      </div>
    </div>
  );
}