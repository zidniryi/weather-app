import React from "react";

import "./cardview.css";

export default function CardView({ name, message }) {
  return (
    <div>
      <div class="card card-0">
        <div class="card__icon">
          <i class="fas fa-bolt"></i>
        </div>
        <p class="card__exit">
          <i class="fas fa-times"></i>
        </p>
        <h2 class="card__title">{message}</h2>
        <p class="card__apply">
            {name} <i class="fas fa-arrow-right"></i>
        </p>
      </div>
    </div>
  );
}
