
import React from "react";
import Header from './Header';
import Footer from './Footer';
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
import { isConstructorDeclaration } from "typescript";
const Tab1 = (props) => {
  //localStorage.clear()
  const companyData = props.data
  console.log(companyData)
  return (
    <IonPage>
      <Header name={"企業一覧"} />
      <IonContent fullscreen>
        {Object.entries(companyData).map((data) => {
          {console.log(data)}
          return (
            <IonCard>
              <IonCardHeader>
                <IonCardTitle>{data[0]}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonIcon icon={star}>aiuro</IonIcon> {data[1].value}
              </IonCardContent>
            </IonCard>
          )
        })}
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Tab1;

