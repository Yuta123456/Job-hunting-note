import React, { useState } from "react";
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
  IonRange
} from "@ionic/react";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { starOutline,ellipsisHorizontal,star } from "ionicons/icons";
const test = (props) => {
    console.log(props.match.params);
    return (
        <IonPage>
            <Header name={"企業情報"} />
            <IonContent fullscreen>
                <IonTitle>選択した企業 : {props.match.params.name}</IonTitle>
            </IonContent>
            <Footer />
        </IonPage>
    );
}
export default test;