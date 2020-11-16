import React, { useState } from "react";
import {
  //   IonContent,
  //   IonHeader,
  //   IonPage,
  //   IonTitle,
  //   IonToolbar,
  //   IonCard,
  //   IonCardHeader,
  //   IonCardTitle,
  //   IonCardSubtitle,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
} from "@ionic/react";
import "./Tab3.css";

const CompanyInformation = () => {
  const [text, setText] = useState(
    "企業理念の〇〇というところにとても共感できた"
  );
  const [number, setNumber] = useState();

  return (
    //   {data.map((value)=>{})}
    <IonItem>
      <IonLabel position="stacked">企業理念</IonLabel>
      {/* <IonButton expand="block" onClick={() => setActionAlert(true)}>
        単語を追加
      </IonButton>
      <IonButton expand="block" onClick={() => setSerchActionAlert(true)}>
        IDで検索
      </IonButton>
      <IonButton
        expand="full"
        onClick={() => {
          setKey("");
        }}
      >
        リセット
      </IonButton> */}

      <IonInput value={text} placeholder=""></IonInput>
      <IonLabel position="stacked">福利厚生</IonLabel>
      <IonInput value={text} placeholder="説明を入力"></IonInput>
      <IonLabel position="stacked">年収月収</IonLabel>
      <IonInput value={text} placeholder="説明を入力"></IonInput>
      <IonLabel position="stacked">昇給制度</IonLabel>
      <IonInput value={text} placeholder="説明を入力"></IonInput>
    </IonItem>
  );
};

export default CompanyInformation;
