import React, { useState } from "react";
import Header from './Header';
import Footer from './Footer';
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
import { starOutline,ellipsisHorizontal,star } from "ionicons/icons";
import "./Tab3.css";
// import "./company-information.css";
const CompanyEdit = (props) => {
  const name = props.match.params.name.substr(1)
  const data = JSON.parse(localStorage.companyData)
  if(data[name] === undefined){
        data[name] = {}
  }
 
  const [inputData, setInputData] = useState(data[name]);
  const [companyName, setCompanyData] = useState(name);
  function setText(itemName, submitText){
    const newData = inputData;
    const oldData = newData[itemName];
    oldData[0] = submitText;
    newData[itemName] = oldData;
    setInputData(newData);
  }
  function setEval(itemName, submitEval){
    const newData = inputData;
    const oldData = newData[itemName];
    oldData[1] = submitEval;
    newData[itemName] = oldData;
    setInputData(newData);
  }
  function editCompany(){
    const companyData = JSON.parse(localStorage.getItem("companyData"));
    delete companyData[name]
    companyData[companyName] = inputData;
    localStorage.setItem("companyData", JSON.stringify(companyData));
  }
  return (
    <IonPage>
    <Header name="企業編集" flag="false"/>
      <IonContent fullscreen>
        <IonInput placeholder="企業名を入力" value={companyName} onIonChange={(e) => {setCompanyData(e.detail.value)}}></IonInput>
        {Object.entries(data[name]).map(values => {
          return (
            <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                {values[0]}
                <IonItem>
                <IonIcon icon={star}>aiuro</IonIcon>
            <IonRange min="1" max="5" step="1" value={String(values[1][1])} snaps color="danger" onIonChange={(e) =>{setEval(values[0], e.detail.value)}}>
              {/* <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon> */}
              {/* <ion-icon slot="end" color="danger" name="thermometer"></ion-icon> */}
            </IonRange>
          </IonItem>   
                </IonCardTitle>
                <IonInput placeholder="説明を入力" value={values[1][0]} onIonChange={(e)=>{setText(values[0], e.detail.value)}}></IonInput>
              </IonCardHeader>
              </IonCard>
          );
        })}
        <IonButton expand="block" onClick={()=>{editCompany()}} disabled={companyName===""} routerLink="/tab1">編集を完了する</IonButton>
      </IonContent>
      <Footer />
    </IonPage>
  );
};
export default CompanyEdit;

