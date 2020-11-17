import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
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
const data = {
  "contents":[
      {"item":"企業理念"},
      {"item":"福利厚生"},
      {"item":"年収月収"},
      {"item":"昇給制度"},
      {"item":"男女比"},
      {"item":"平均年齢"},
      {"item":"ジョブローテーション"},
      {"item":"勤務地"}
  ]
}
const companyRegistration = () => {
  const stars = [1, 1, 1, 1, 1];
  // const 
  return (
    <IonPage>
      <IonContent fullscreen>
        <Header name="企業登録">
        <ion-buttons slot="primary">
            <ion-button>
              <ion-icon slot="icon-only" color="dark" icon={ellipsisHorizontal}></ion-icon>
            </ion-button>
          </ion-buttons>
        </Header>
      
        <IonInput placeholder="企業名を入力"></IonInput>
        {data.contents.map((data) => {
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
      <Footer />
    </IonPage>
  );
};
export default companyRegistration;

