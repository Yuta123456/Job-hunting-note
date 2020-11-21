import React from "react";
import { IonSlide } from "@ionic/react";
import Image from "./image/slide3.png";
import "./slide.css";

const imagecss = {
  maxHeight: "45%",
  margin: "20px 0 0px",
};

const Slide3 = (props) => {
  return (
    <IonSlide>
      <img src={Image} alt="フィット系" style={imagecss} />
      <h2>勤務体系</h2>
      <p>
        勤務体系には会社にどのように、どんな時間帯で勤めるかをメモしましょう。
        <br />
        趣味や家庭に割ける時間が決まってくるため、あなたのライフスタイルそのものになるでしょう。
      </p>
      <h2>自分にあっている点</h2>
      <p>
        自分がなぜこの会社で働きたいと感じたかを詳細にメモしておきましょう。
        <br />
        複数の会社をメモすると、どの会社が自分に合っているのかが見えてきます。
      </p>
    </IonSlide>
  );
};

export default Slide3;
