import React from "react";
import { IonSlide } from "@ionic/react";
import Image from "./image/slide2.png";
import "./slide.css";

const imagecss = {
  maxHeight: "40%",
  margin: "10px 0 0px",
};

const Slide2 = (props) => {
  return (
    <IonSlide>
      <img src={Image} alt="会社系" style={imagecss} />
      <h2>事業内容</h2>
      <p>
        事業内容とは会社が取り組んでいる仕事内容。
        <br />
        メモしていくと、自分の実際の働いている姿が想像できるようになるでしょう。
      </p>
      <h2>経営理念</h2>
      <p>
        経営理念とは会社の目指す方向です。
        <br />
        それはそのまま社員の行動指針になるため、自分が従っていくコンパスになります。
      </p>
    </IonSlide>
  );
};

export default Slide2;
