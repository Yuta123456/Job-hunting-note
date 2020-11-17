
import React from "react";
import Header from './Header';
import Footer from './Footer';
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
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Tab1 = (props) => {
  //localStorage.clear()
  //localStorage.companyData = JSON.stringify(props.data)
  const companyData = props.data
  //console.log(typeof(props.data))
  //console.log(typeof(companyData), companyData)
  return (
    <IonPage>
      <Header name={"企業一覧"} />
      <IonContent fullscreen>
        {Object.keys(companyData).map(key => {
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
      <Footer />
    </IonPage>
  );
};

export default Tab1;