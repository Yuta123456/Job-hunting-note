import React, { useState } from "react";
import Header from './Header';
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonInput,
  IonCardHeader,
  IonIcon
} from "@ionic/react";
import { star } from 'ionicons/icons';
import "./Tab2.css";

const memo = [ 
  {name:"企業理念"},
  {name:"福利厚生"},
  {name:"年収月収"},
  {name:"昇給制度"}
];

const stars = [1, 1, 1, 1, 1];


const Tab2 = () => {
  return (
    <IonPage>
    <Header name={"企業登録"}/>

    <IonContent fullscreen>   
          {memo.map((data) => 
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>     
                  {data.name+"　"} 
                  {stars.map(() => {
                    return <IonIcon icon={star}>aiuro</IonIcon>;
                  })}
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonInput placeholder="説明を入力"></IonInput>
              </IonCardContent>
            </IonCard>
          )}
      </IonContent>
  </IonPage>
  );
};

export default Tab2;
