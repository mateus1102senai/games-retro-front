import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Games Retro</h1>
      <p>Record de jogos retro</p>
    </main>
  );
}
