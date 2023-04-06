import styles from "@/styles/navbar.module.css";
import { useRouter } from "next/router";
import { CartContext } from "../CartContext";
import React, { useContext, useEffect, useState } from "react";

const Navbar = () => {
  const router = useRouter();
  const { cartItems } = useContext(CartContext);
  const [cartItemsCount, setCartItemsCount] = useState(0);

  useEffect(() => {
    setCartItemsCount(cartItems);
  }, [cartItems]);

  const handleLinkClick = (path) => {
    router.push(path);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <h2>Enigma</h2>
      </div>
      <div className={styles.links}>
        <div className={styles.cartContainer}>
          <img src="/cart.svg" alt="Cart icon" />
          <div className={styles.cartCount}>{cartItemsCount}</div>
        </div>
        <span onClick={() => handleLinkClick("/")}>HOME</span>
        <span onClick={() => handleLinkClick("/boxes")}>BOXES</span>
        <span onClick={() => handleLinkClick("/contact")}>CONTACT</span>
      </div>
    </nav>
  );
};

export default Navbar;
