import React from "react";
import { BsGithub, BsTwitter } from "react-icons/bs";
import { Container, Row, Col } from "react-bootstrap";
import styles from "./Footer.module.css";

function Footer() {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <div className={styles.footer}>
              <h6 className="">
                Developed by{" "}
                <a
                  href="https://www.linkedin.com/in/bekir-uyumaz/"
                  target="_blank"
                >
                  Bekir Uyumaz
                </a>
              </h6>
              <button
                className={styles.socialMediaIcons}
                onClick={() =>
                  window.open("https://github.com/cryptobcu", "_blank")
                }
              >
                <BsGithub size={35} />
              </button>
              <button
                className={styles.socialMediaIcons}
                onClick={() =>
                  window.open("https://twitter.com/cryptobcu", "_blank")
                }
              >
                <BsTwitter size={35} />
              </button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Footer;
