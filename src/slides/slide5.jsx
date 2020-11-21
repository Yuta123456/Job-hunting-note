import React from "react";
import { IonSlide, IonButton } from "@ionic/react";
import Image from "./image/slide5.png";
import "./slide.css";

const imagecss = {
  margin: "53px 0 0px",
};

const Slide5 = (props) => {
  function setSubmitObjective() {
    localStorage.setItem("objective", "面接対策");
    localStorage.setItem("visited", "true");
    localStorage.setItem("companyData", JSON.stringify({}));
  }
  return (
    <IonSlide>
      <img src={Image} alt="まとめ" style={imagecss} />
      <h2>最後に</h2>
      <p>
        このアプリでは、メモ以外にも項目別で自分への適合度の登録が出来ます。
        <br />
        この機能は企業同士の比較に使うとよいでしょう。
        <br />
        このチュートリアルは、企業一覧の左上からいつでも見ることが出来ます。
        <br />
        あなたが良い就活ノートを作れるようになることを願っています。
      </p>
      <IonButton
        routerLink="./tab1"
        onClick={() => {
          setSubmitObjective();
        }}
      >
        就活ノートを始める
      </IonButton>
    </IonSlide>
  );
};

export default Slide5;
