import styles from '@/styles/cardbox.module.css';
import AddToCartButton from './AddToCartButton';

const CardBox = ({ title, imageSrc, price }) => {
    return (
      <div className={styles.cardBox}>
        <div className={styles.cardBoxImageContainer}>
          <img className={styles.cardBoxImage} src={imageSrc} alt={title} />
        </div>
        <div className={styles.cardBoxTitle}>{title}</div>
        <div className={styles.cardBoxPrice}>{price}</div>
        <AddToCartButton />
      </div>
    );
  };
  
  export default CardBox;



