import notFoundImage from "../../assets/not-found.jpeg";
import styles from "./not-found-page.module.scss";

export default function NotFoundPage() {
  return (
    <div className={styles.notFoundImage}>
      <img src={notFoundImage} />
      <p>Nothing</p>
    </div>
  );
}
