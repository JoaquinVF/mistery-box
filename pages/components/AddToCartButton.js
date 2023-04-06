import styles from '@/styles/AddToCartButton.module.css';
import { useContext } from 'react';
import { CartContext } from '../CartContext';

const AddToCartButton = () => {
    const { addToCart } = useContext(CartContext);
  return (
    <button className={styles.button} onClick={addToCart}>Add to Cart</button>
  );
};

export default AddToCartButton;
