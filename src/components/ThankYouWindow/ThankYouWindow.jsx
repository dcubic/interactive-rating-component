import styles from "./ThankYouWindow.module.css";
import thankYouIllustration from "../../assets/illustration-thank-you.svg";

export default function ThankYouWindow(props) {
  return (
    <main className={styles["background-panel"]}>
      <img src={thankYouIllustration} className={styles.imageStyle}></img>
      <div className={styles.resultContainer}>
        <p className={`${styles.noMargin} ${styles.result}`}>
          You selected {props.ratingState} out of 5
        </p>
      </div>
      <h1 className={`${styles.noMargin} ${styles.header}`}>Thank you!</h1>
      <p className={`${styles.noMargin} ${styles.appreciationMessage}`}>
        We appreciate you taking the time to give a rating. If you ever need
        more support, don’t hesitate to get in touch!
      </p>
    </main>
  );
}
