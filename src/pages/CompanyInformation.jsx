import React, { useState } from "react";
import Header from './Header';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./Tab3.css";

const CompanyInformation = () => {
  const data = [
    { item: "企業理念", memo: "御社の企業理念に！！" },
    { item: "福利厚生", memo: "良き" },
    { item: "年収月収", memo: "" },
    { item: "昇給制度", memo: "" },
  ];
  const stars = [1, 1, 1, 1, 1];
  return (
    <IonContent fullscreen>
      <Header name={"企業情報"}/>
      {data.map((data) => {
        return (
          <IonItem>
            <IonLabel position="stacked">
              {data.item}
              {stars.map(() => {
                return <IonIcon icon={star}>aiuro</IonIcon>;
              })}
            </IonLabel>

            <IonInput value={data.memo} placeholder=""></IonInput>
          </IonItem>
        );
      })}
    </IonContent>
  );
};

export default CompanyInformation;
