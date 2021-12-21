import React from "react";

export class Message1 extends React.Component {
  render() {
    return (
      <>
        <h2 align="center">
          14, 15, 16, апреля! Праздничное открытие! Магазин промтоваров
          Галамарт!
        </h2>
        <p>
          <font size="-1">
            <b>В честь праздника:</b>
          </font>
        </p>
        <p>
          <font face="Tahoma" size="-1">
            <p>
              <strong>
                <ins>При покупке от 500 рублей</ins>
              </strong>
              - гарантированный
              <strong>ПОДАРОК</strong>
            </p>
            <p>
              <strong>
                <ins>Главный подарок</ins>- СЕРТИФИКАТ
              </strong>
              на покупки
              <strong>
                <font size="+1" color="red" face="Georgia">
                  30 000
                </font>
              </strong>
              рублей (разыгрывается между посетителями).
            </p>
            <p>
              <em>
                <font color="red">
                  Обладатель определится 16 апреля в 16
                  <sup>00</sup>.
                </font>
                Наш адрес: г. Минск, пр. Победителей, 20.
              </em>
            </p>
          </font>
        </p>
      </>
    );
  }
}
