import React, { useEffect, useState } from "react";
import axios from "axios";
import { Card, Col, Container, Row } from "react-bootstrap";

import Menu from "../../component/Menu/Menu";
import { bmkgRules } from "../../Constant/bmkgRules";
import { Link } from "react-router-dom";
import { imageRules } from "../../Constant/imageRules";
import { converToJson } from "../../helper/converToJson";
import Swal from "sweetalert2";

function Home() {
  const [dataMe, setdata] = useState({});
  const [isError, setisError] = useState(false);

  /**
   * Get Data From API BMKG and covert it into JSON
   */
  const getData = async () => {
    try {
      const response = await axios.get(
        "https://data.bmkg.go.id/DataMKG/MEWS/DigitalForecast/DigitalForecast-JawaTengah.xml",
        {
          "Content-Type": "application/xml; charset=utf-8",
        }
      );
      // Convert xml to json data
      const datares = converToJson(response.data);

      setdata(datares.data.forecast);
      setisError(false);
    } catch (error) {
      setisError(true);
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong with the API!",
      });
    }
  };

  useEffect(() => {
    getData();
  }, []);
  if (isError) return <h2>Server sedang error, coba lagi nanti..</h2>;
  return (
    <>
      <Menu />
      <Container>
        <div style={{ marginTop: "2%" }}>
          <Row>
            {dataMe &&
              dataMe.area?.slice(0, 5)?.map((nameArea, index) => {
                return (
                  <Col md={4} key={index}>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{
                        pathname: "/detail",
                        state: {
                          nameArea: nameArea,
                          images: imageRules(nameArea._attributes.description),
                        },
                      }}
                    >
                      <Card style={{ width: "20rem" }}>
                        <Card.Img
                          variant="top"
                          src={imageRules(nameArea._attributes.description)}
                        />
                        <Card.Body>
                          <Card.Title
                            style={{ color: "#FFFF", fontWeight: "bold" }}
                          >
                            {nameArea._attributes.description}
                          </Card.Title>
                          <Card.Text
                            style={{
                              color: "#FFFF",
                              fontWeight: "bold",
                              fontSize: 11,
                            }}
                          >
                            <ul>
                              <li>
                                Koordinat : {nameArea._attributes.coordinate}
                              </li>
                              <li>
                                Cuaca :{" "}
                                {bmkgRules(
                                  parseInt(nameArea._attributes.level)
                                )}
                              </li>
                            </ul>
                          </Card.Text>
                        </Card.Body>
                      </Card>
                    </Link>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </>
  );
}

export default Home;
