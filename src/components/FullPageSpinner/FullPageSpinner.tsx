import { Spinner } from "@radix-ui/themes";
import styles from "./FullPageSpinner.module.scss";

function FullPageSpinner() {
  return (
    <div className={styles.overlay}>
      <Spinner size="3" className={styles.loadingSpinner} />
    </div>
  );
}

export default FullPageSpinner;
