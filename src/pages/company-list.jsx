
import React from "react";
import Header from './Header';
import Footer from './Footer';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardSubtitle,
  IonCardHeader,
  IonText,
  IonIcon,
  IonItemDivider,
  IonNote,
  IonItem,
  IonLabel
} from "@ionic/react";
import { star,chevronForwardOutline} from 'ionicons/icons';
import PromoteRegist from '../components/PromoteRegist';
const evalTextStyle = {
  fontSize : "3vw",
}
const companyNameStyle = {
  fontSize: "5vw",
  color:"black"
}

const Tab1 = (props) => {
  const companyData = JSON.parse(localStorage.getItem("companyData"))
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
                  <span style={companyNameStyle}><IonText>{key}</IonText>
                  <IonIcon icon={chevronForwardOutline} class="ion-float-right" size="small"/>
                  </span>
                  
                </IonCardHeader>
                <IonCardContent size="small">
                  
                 <IonNote style={evalTextStyle}>総合評価:<IonIcon icon={star} color="warning"/> {mean[i]}</IonNote>
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