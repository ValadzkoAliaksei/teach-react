import React from "react";

import style from "./product.module.css";

export class Product extends React.Component {
  render() {
    return (
      <div className={style.product}>
        <div>
          Товар: <>{this.props.product.title}</>
        </div>
        <div>
          Марка: <>{this.props.product.description}</>
        </div>
        <img src={this.props.product.imgSrc} alt="foto" />

        <input
          type="number"
          name={this.props.product.id}
          onChange={(e) =>
            this.props.handleChange(
              this.props.product.id,
              e.currentTarget.value
            )
          }
        />
      </div>
    );
  }
}
