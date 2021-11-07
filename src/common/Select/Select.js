import styles from "./select.module.css";
import Select from "react-select";

// ...spread operator => ...
// ...rest operator =>
const SelectComponent = ({ title, ...rest }) => {
  return (
    <div className={styles.selectContainer}>
      <span> {title}</span>
      <Select {...rest} className={styles.Select} />
    </div>
  );
};

export default SelectComponent;
