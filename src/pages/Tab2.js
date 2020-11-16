import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonInput,
} from "@ionic/react";
import "./Tab2.css";

const Tab2 = () => {
  return (
    <ion-app>
    <ion-header translucent>
    </ion-header>

    <ion-content fullscreen>
      <ion-list lines="full" class="ion-no-margin">
        <ion-item>
          <ion-input placeholder="企業名"></ion-input>
        </ion-item>
      </ion-list>
      <ion-list lines="full" class="ion-no-margin">
        <ion-item>企業理念　　　　☆☆☆☆☆</ion-item>
        <ion-item>
          <ion-input placeholder="説明を入力"></ion-input>
        </ion-item>
        <ion-item>福利厚生　　　　☆☆☆☆☆</ion-item>
        <ion-item>
          <ion-input placeholder="説明を入力"></ion-input>
        </ion-item>
        <ion-item>年収月収　　　　☆☆☆☆☆</ion-item>
        <ion-item>
          <ion-input placeholder="説明を入力"></ion-input>
        </ion-item>
        <ion-item>昇給制度　　　　☆☆☆☆☆</ion-item>
        <ion-item>
          <ion-input placeholder="説明を入力"></ion-input>
        </ion-item>
      </ion-list>
    </ion-content>
  </ion-app>
  );
};

export default Tab2;
