
import React, {useState} from "react";
import Header from './Header';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonText,
  IonIcon,
  IonNote,
  IonFabButton,
  IonFab,
  IonModal,
  IonToast
} from "@ionic/react";
import { star,chevronForwardOutline,add} from 'ionicons/icons';
import PromoteRegist from '../components/PromoteRegist';
import './company-list.css'
import Registration from "./company-registration"

const evalTextStyle = {
  fontSize : "0.8em",
}
const companyNameStyle = {
  fontSize: "1.5em",
  color:"black"
}
const Tab1 = (props) => {
  const companyData = JSON.parse(localStorage.getItem("companyData"))
  const mean = []
  const [showToast, setShowToast] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [message, setMessage] = useState("")
  Object.values(companyData).map((value) => {
      let total = 0
      let cnt = 0
      Object.values(value).map(value => {
        if (value[1] !== 0){
          cnt += 1
          total += value[1]
        }
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
              <IonCard button routerLink={"/detail/" + key} key={key}>
                <IonCardHeader>
                  <span style={companyNameStyle}><IonText>{key}</IonText>
                  <IonIcon icon={chevronForwardOutline} class="ion-float-right" size="small"/>
                  </span>
                </IonCardHeader>
                <IonCardContent size="small">
                 <IonNote style={evalTextStyle}>平均適合度:<IonIcon icon={star} color="warning"/> {mean[i]}</IonNote>
                </IonCardContent>
              </IonCard>
            )
          })):(
            <PromoteRegist/>
          )
        }
        <IonFab horizontal = "end" slot="fixed" vertical="bottom" >
          <IonFabButton onClick = {() => setShowModal(true)}>
              <IonIcon icon={add}/>
          </IonFabButton>
        </IonFab>
        <IonModal 
          isOpen = {showModal}
          swipeToClose = {true}
          onDidDismiss = {() => setShowModal(false)}>
            <Registration  setShowModal = {setShowModal} setShowToast = {setShowToast} setMessage = {setMessage}/>
          </IonModal>
        <IonToast
        isOpen={showToast}
        onDidDismiss = {() => setShowToast(false)}
        message={message}
        position="top"
        duration={2000}
        />
          
      </IonContent>
    </IonPage>
  );
};

export default Tab1;