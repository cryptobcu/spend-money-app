import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Table.module.css";
import { useSelector } from "react-redux";
import ProductCard from "../ProductCard/ProductCard";
import Header from "../Header/Header";
import Receipt from "../Receipt/Receipt";
import Footer from "../Footer/Footer";

function Table() {
  const items = useSelector((state) => state.products.items);
  const budget = useSelector((state) => state.products.budget);
  const editBudget = Number(budget).toLocaleString(); // Burda bütçe değerinin aralarına virgül koyulmasını sağladık.

  return (
    <div>
      <Container>
        <div className={styles.centerMoney}>${editBudget}</div>
        <Row className={styles.containerProduct} style={{ marginLeft: "75px" }}>
          {items.map((item) => (
            <Col key={item.id} xl={3}>
              <ProductCard item={item} id={item.id} />
            </Col>
          ))}
        </Row>
        <Receipt />
      </Container>
    </div>
  );
}

export default Table;
