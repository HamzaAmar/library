import styles from './loading.module.css';

const LoadingDots: React.FC = () => {
  return (
    <span className={styles.root}>
      <span className={styles.dot} key={`dot_1`} />
      <span className={styles.dot} key={`dot_2`} />
      <span className={styles.dot} key={`dot_3`} />
    </span>
  );
};

export default LoadingDots;
