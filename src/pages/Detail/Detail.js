import React, { useState } from "react";
import { Container } from "react-bootstrap";

import Menu from "../../component/Menu/Menu";
import { bmkgRules } from "../../Constant/bmkgRules";

export default function Detail({ location }) {
  // The data is get from previous pages as STATE
  const { state } = location;
  const [detailInfo, setdetailInfo] = useState(state);

  return (
    <div>
      <Menu />
      <Container>
        <h1
          class="text-success"
          style={{ marginTop: "2%", marginBottom: "1%" }}
        >
          Kota:{" "}
          {detailInfo
            ? detailInfo?.nameArea?._attributes.description
            : "Loading.."}
        </h1>

        <div class="row">
          <div class="col-md-8">
            <img class="img-fluid" src={detailInfo?.images} alt="" />
          </div>

          <div class="col-md-4">
            <h3 class="my-3">
              Provinsi {detailInfo?.nameArea._attributes?.domain}
            </h3>
            <p>Tanggal: {new Date().toLocaleString("en-GB")}</p>
            <h3 class="my-3">
              Cuaca :{" "}
              {bmkgRules(parseInt(detailInfo?.nameArea._attributes.level))}
            </h3>
            <ul>
              <li>Latitude : {detailInfo?.nameArea._attributes?.latitude}</li>
              <li>Longitude : {detailInfo?.nameArea._attributes?.longitude}</li>
              <li>Koordinat: {detailInfo?.nameArea._attributes?.coordinate}</li>
              <li>Tipe : {detailInfo?.nameArea._attributes?.type} </li>
              <li>ID : {detailInfo?.nameArea._attributes?.id}</li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
}
