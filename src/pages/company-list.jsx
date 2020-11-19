
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
  IonIcon,
  useIonViewWillEnter
} from "@ionic/react";
import { star } from 'ionicons/icons';
import PromoteRegist from '../components/PromoteRegist';
const Tab1 = (props) => {
  const companyData = props.data
  useIonViewWillEnter(() => {
    props.setCompanyData(JSON.parse(localStorage.getItem("companyData")));
  });
  const mean = []
  Object.values(companyData).map((value) => {
      let total = 0
      let cnt = 0
      Object.values(value).map(value => {
        cnt += 1
        total += value[1]
        return null;
      })
      mean.push((total / cnt).toFixed(1))
      return null;
  })
  let i = -1
  return (
    <IonPage>
      <Header name={"企業一覧"} />
      <IonContent fullscreen>
        {Object.values(companyData).length !== 0 ?(
          Object.keys(companyData).map((key) => {
            i += 1
            return (
              <IonCard button routerLink={"/detail/:" + key} key={key}>
                <IonCardHeader>
                  <IonCardTitle>{key}</IonCardTitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonIcon icon={star} color="warning">aiuro</IonIcon> {mean[i]}
                </IonCardContent>
              </IonCard>
            )
          })):(
            <PromoteRegist/>
          )
        }
      </IonContent>
      <Footer />
    </IonPage>
  );
};

export default Tab1;