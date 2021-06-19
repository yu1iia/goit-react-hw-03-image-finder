import styles from "./Button.module.css";

import classNames from "classnames";

const Button = ({ addPage }) => {
  return (
    
    <button
      type="button"
      className={classNames(styles.Button, styles.ButtonPosition)}
      onClick={addPage}
    >
      Load more
    </button>
  
  );
  
}
export default Button;
