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
import { starOutline, ellipsisHorizontal, star } from "ionicons/icons";
import "./Tab3.css";
import data from '../data/questionItem'
// import "./company-information.css";
const propose = "interview"
//ここはimportできない
const CompanyRegistration = (props) => {
  const dic = {};
  for (let i = 0; i < data.length; i++) {
    dic[data[i]] = ["", 1];
  }

  const [inputData, setInputData] = useState(dic);
  const [companyName, setCompanyName] = useState("");
  /* ここ付け足した */
  const [text, setData] = useState("")
  const [name, setName] = useState("")
  
  function setText(itemName, submitText) {
    const newData = inputData;
    /*
    const oldData = newData[itemName];
    oldData[0] = submitText;
    newData[itemName] = oldData;
    */
    newData[itemName][0] = submitText
    setInputData(newData);
  }
  function setEval(itemName, submitEval) {
    const newData = inputData;
    /*
    const oldData = newData[itemName];
    oldData[1] = submitEval;
    newData[itemName] = oldData;
    */
    newData[itemName][1] = submitEval
    setInputData(newData);
  }
  function registCompany() {
    const companyData = JSON.parse(localStorage.getItem("companyData"));
    companyData[companyName] = inputData;
    localStorage.setItem("companyData", JSON.stringify(companyData));
    //initializeData
    for (let i = 0; i < data.length; i++) {
      dic[data[i]] = ["", 1];
    }
    setInputData(dic);
    setCompanyName("");
  }
  return (
    <IonPage>
      <Header name="企業登録" />
      <IonContent fullscreen>
        <form className="ion-padding">
          <IonInput placeholder="企業名を入力" value = {companyName} onIonChange={(e) => { setCompanyName(e.detail.value) }} clearInput={true}></IonInput>
          {data.map((data) => {
            return (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>
                    {data}
                    <IonItem>
                      <IonIcon icon={star}>aiuro</IonIcon>
                      <IonRange min="1" max="5" step="1" value="1" snaps color="danger" onIonChange={(e) => { setEval(data, e.detail.value) }}>
                        {/* <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon> */}
                        {/* <ion-icon slot="end" color="danger" name="thermometer"></ion-icon> */}
                      </IonRange>
                    </IonItem>
                  </IonCardTitle>
                  <IonInput placeholder="説明を入力" value = {text} onIonChange={(e) => { setText(data, e.detail.value) }}></IonInput>
                </IonCardHeader>
              </IonCard>
            );
          })}
          <IonButton expand="block" onClick={() => { registCompany() }} disabled={companyName === ""} routerLink="/tab1">企業を登録</IonButton>
        </form>
      </IonContent>
      <Footer />
    </IonPage>
  );
};
export default CompanyRegistration;

