import React from "react";
import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Card } from "react-bootstrap";
import styles from "./ProductCard.module.css";
import { useEffect } from "react";
import { updateCount } from "../../redux/products/productsSlice";

function ProductCard({ item, id }) {
  const [count, setCount] = useState(0);
  const [salable, setSalable] = useState("disabled");
  const [buyable, setBuyable] = useState("");

  const budget = useSelector((state) => state.products.budget);

  const dispatch = useDispatch();

  // sending id and count to the productsSlice;
  useEffect(() => {
    dispatch(updateCount({ id: item.id, count: count }));
  }, [count]);

  // Buy Button
  const buy = () => {
    setCount(Number(count) + 1);
  };

  // Sell Button
  const sell = () => {
    setCount(Number(count) - 1);
  };

  // Sell button activate, deactivate, negative value condition
  useEffect(() => {
    if (count > 0) {
      setSalable("");
    } else {
      setSalable("disabled");
    }
  }, [count]);

  // Buy button activate, deactivate
  useEffect(() => {
    if (item.productPrice > budget) {
      setBuyable("disabled");
    } else {
      setBuyable("");
    }
  }, [budget]);

  // assign maximum counts
  const handleChange = (value) => {
    const maxCount = Math.floor(budget / item.productPrice) + count; // + count dememizin nedeni başta girdiğimiz input(count) değerinin budget'i düşürmesi dolayısıyla Math.floor'un kalan budget değerine göre max değeri bulması.

    if (value && value > 0) {
      if (value > maxCount && budget >= 0) {
        setCount(maxCount);
      } else {
        setCount(value);
      }
    } else {
      setCount(0);
    }
  };
 
  const editPrice = Number(item.productPrice).toLocaleString();
  
  return (
    <div>
      <Card className={styles.card}>
        <Card.Img variant="top" src={item.image} />
        <Card.Body>
          <Card.Title className={styles.cardTitle}>
            {item.productName}
          </Card.Title>
          <Card.Text className={styles.itemCost}>
            ${editPrice}
          </Card.Text>
          <div className={styles.buySell}>
            <button
              disabled={salable}
              className={salable === "" ? styles.sellBtn : styles.disabledBtn}
              onClick={sell}
            >
              Sell
            </button>
            <input
              className={styles.itemInput}
              value={count}
              onChange={(e) => handleChange(parseInt(e.target.value))}
            />
            <button
              disabled={buyable}
              className={buyable === "" ? styles.buyBtn : styles.disabledBtn}
              onClick={buy}
            >
              Buy
            </button>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default ProductCard;
