import notFoundImage from "../../assets/not-found.jpeg";
import styles from "./not-found-page.module.css";

export default function NotFoundPage() {
  return (
    <div className={styles.not_found_image}>
      <img src={notFoundImage} />
      <p>Nothing</p>
    </div>
  );
}
