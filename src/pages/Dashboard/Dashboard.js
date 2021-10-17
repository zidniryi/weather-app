import React, { useEffect, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CardView from "../../component/CardView/CardView";
import Menu from "../../component/Menu/Menu";
export default function Dashboard() {
  const [dataUser, setDataUser] = useState([]);
  /**
   * For set contact data
   */
  useEffect(() => {
    const item = localStorage.getItem("data");
    setDataUser(JSON.parse(item));
  }, []);

  return (
    <div>
      <Menu />
      <Container>
        <Row>
          {dataUser ? (
            dataUser.map((item, index) => {
              return (
                <Col md={6} xs={12}>
                  <CardView
                    message={item.message}
                    name={`Name: ${item.fullName}`}
                  />
                </Col>
              );
            })
          ) : (
            <h2 style={{ marginTop: "2%" }}>No data yet..</h2>
          )}
        </Row>
      </Container>
    </div>
  );
}
