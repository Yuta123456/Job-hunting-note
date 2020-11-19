
import React from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonIcon
} from "@ionic/react";
import { star } from 'ionicons/icons';
const Delete = () => {
  const data = JSON.parse(localStorage.companyData)
  return (
    <IonPage>
      <IonContent fullscreen>
        {Object.keys(data).map(key => {
          return (
            
            <IonCard button routerLink={"/detail/:"+ key}>
              <IonCardHeader>
                <IonCardTitle>{key}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonIcon icon={star}>aiuro</IonIcon> {}
              </IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
    </IonPage>
  );
};

export default Delete;