
import React, { useState} from "react";
import Header from './Header';
import Footer from './Footer';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardHeader,
  IonIcon,
  useIonViewWillEnter
} from "@ionic/react";
import { star } from 'ionicons/icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
const Tab1 = (props) => {
  const companyData = props.data
  useIonViewWillEnter(()=>{
    props.setCompanyData(JSON.parse(localStorage.getItem("companyData")));
  });
  //const [mean, setMean] = useState([])
  const mean = []
  Object.values(companyData).map(value => {
    let total = 0
    let cnt = 0
    Object.values(value).map(value => {
      cnt += 1
      total += value[1]
    })
    mean.push(total / cnt)
  })
  console.log(mean)
  let i = -1
  return (
    <IonPage>
      <Header name={"企業一覧"} />
      <IonContent fullscreen>
        {Object.keys(companyData).map(key => {
          i += 1
          return (
            <IonCard button routerLink={"/detail/:"+ key}>
              <IonCardHeader>
                <IonCardTitle>{key}</IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                <IonIcon icon={star} color = "warning">aiuro</IonIcon> {mean[i]}
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