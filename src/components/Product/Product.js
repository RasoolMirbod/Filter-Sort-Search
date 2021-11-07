// import "./product.css";
import styles from "./product.module.css";
import { BiTrash } from "react-icons/bi";
import { useContext, useEffect } from "react";

const Product = ({ onChange, product, onIncrement, onDecrement, onDelete }) => {
  // console.log(props);

  console.log("Product rerender");
  // CDM + CDU + CWUM => useEffect()
  useEffect(() => {
    return () => {
      // clean-up => timer , interval, ...
      console.log("Product CWUM");
    };
  }, []);

  return (
    <div className={styles.product}>
      <p>product name : {product.title} course</p>
      <p>product price:{product.price}</p>

      <span className={styles.value}>{product.quantity}</span>
      {/* <input
        className={styles.input}
        type="text"
        onChange={onChange}
        value={product.title}
      /> */}
      <button
        onClick={onIncrement}
        className={`${styles.button} ${styles.inc}`}
      >
        +
      </button>
      <button
        onClick={onDecrement}
        className={`${styles.button} ${
          product.quantity === 1 && styles.remove
        }`}
      >
        {product.quantity > 1 ? "-" : <BiTrash />}
      </button>
      <button onClick={onDelete} className={styles.button}>
        delete
      </button>
    </div>
  );
};

export default Product;
