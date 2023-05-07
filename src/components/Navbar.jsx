import styles from '@/styles/Navbar.module.css'

export default function Navbar() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <h1 data-cy="header-title">To Do List App</h1>
      </div>
    </header>
  );
}
