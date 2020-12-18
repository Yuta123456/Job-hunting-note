import React from "react";
import { IonSlide } from "@ionic/react";
import Image from "./image/slide1.jpeg";
import "./slide.css";

const Slide1 = (props) => {
  return (
    <IonSlide>
      <img src={Image} alt="最初" />
      <h2>就活ノートへようこそ</h2>

      <p>
        このアプリは 「就活の知識がない人の就活ノート作りを導く」
        をコンセプトにし、項目を絞ることでメモをとりやすくしています。
        <br />
        就活ノートにメモするべき最低限必要な項目を
        このチュートリアルでみていきましょう。
      </p>
    </IonSlide>
  );
};

export default Slide1;
