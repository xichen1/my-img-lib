import styles from "../styles/Banner.module.css";

const Banner = (props) => {
  return (
    <div className={styles.container}>
      <div className={styles.subTitle1}>Your Image Library</div>
      <h1 className={styles.title}>
        <div className={styles.title1}>Keep it safe</div>
        <div className={styles.title2}>Keep it privacy</div>
      </h1>
      <p className={styles.subTitle2}>Store and manage you images here!</p>
      <div className={styles.buttonWrapper}>
        <button className={styles.button}>Start!</button>
      </div>
    </div>
  );
};

export default Banner;
