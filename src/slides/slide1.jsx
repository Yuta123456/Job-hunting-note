import React from "react";
import { IonSlide } from "@ionic/react";
import Image from "./image/slide1.jpg";
import "./slide.css";
const imagecss = {
  margin: "40px 0 0px",
};
const Slide1 = (props) => {
  return (
    <IonSlide>
      <div className="slide">
        <img src={Image} alt="最初" style={imagecss} />
        <h2>就活ノートへようこそ</h2>

        <p>
          このアプリは 「就活の知識がない人の就活ノート作りを導く」
          をコンセプトにし、項目を絞ることでメモをとりやすくしています。
          <br />
          就活ノートにメモするべき最低限必要な項目を
          このチュートリアルでみていきましょう。
        </p>
      </div>
    </IonSlide>
  );
};

export default Slide1;
