import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faArrowRight, faCommentDots } from '@fortawesome/free-solid-svg-icons'
import styles from './Start.module.css'

const Input = props => {
  return (
    <div className={styles.inputContainer}>
      <div className={styles.leftIcon}>
        <FontAwesomeIcon icon={faCommentDots} size="3x" />
      </div>
      <input
        id={props.id}
        type="text"
        placeholder={props.placeholder}
        onChange={props.onInputChange}
        className="Input-text"
      />
      <button className={styles.button} type="submit" onClick={props.onButtonSubmit}>
        <FontAwesomeIcon icon={faArrowRight} size="2x" />
      </button>
    </div>
  );
};

export default Input;
