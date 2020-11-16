import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonIcon
} from "@ionic/react";
import { star } from 'ionicons/icons';
import ExploreContainer from "../components/ExploreContainer";
const companyData = [ {name:"三菱UFJ", value:3.5},
                      {name:"日本大学", value:0.8},
                      {name:"エイチアイ", value:5.0},
                      {name:"ゆめみ", value:5.0}];
const Tab1 = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>企業一覧</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        
          {companyData.map( (data) => 
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{data.name}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonIcon icon={star}>aiuro</IonIcon> {data.value}
              </IonCardContent>
            </IonCard>
          )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
