import React, { useState } from "react";
import Header from './Header';
import Fotter from './Fotter';
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
  IonText,
} from "@ionic/react";
import { starOutline,ellipsisHorizontal,star } from "ionicons/icons";
import "./Tab3.css";
// import "./company-information.css";
const propose="interview"
const data = [
  { item: "企業理念", memo: "御社の企業理念に！！" ,evalution: "5"},
  { item: "福利厚生", memo: "良き" ,evalution: "0"},
  { item: "年収月収", memo: "" ,evalution: "0"},
  { item: "昇給制度", memo: "" ,evalution: "0"},
];
const companyRegistration = () => {
  const stars = [1, 1, 1, 1, 1];
  return (
    <IonPage>
      <IonContent fullscreen>
      <ion-toolbar  color="success">
          <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" color="dark" icon={ellipsisHorizontal}></ion-icon>
            </ion-button>
          </ion-buttons>
          <ion-title>企業登録</ion-title>
        </ion-toolbar>
        {data.map((data) => {
          return (
            <IonCard>

            <IonCardHeader>
              <IonCardTitle>
                {data.item}
                <ion-item>
                <IonIcon icon={star}>aiuro</IonIcon>
            <ion-range min="1" max="5" step="1" value="1" snaps color="danger">
              {/* <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon> */}
              {/* <ion-icon slot="end" color="danger" name="thermometer"></ion-icon> */}
            </ion-range>
          </ion-item>

                </IonCardTitle>
                <IonInput placeholder="説明を入力"></IonInput>
              </IonCardHeader>
              </IonCard>
          );
        })}
      </IonContent>
      <Fotter />
    </IonPage>
  );
};
export default companyRegistration;

