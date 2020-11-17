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
const propose="interview"
const data = {
  "contents":[
      {"item":"企業理念"},
      {"item":"福利厚生"},
      {"item":"年収月収"},
      {"item":"昇給制度"},
      {"item":"男女比"},
      {"item":"平均年齢"},
      {"item":"ジョブローテーション"},
      {"item":"勤務地"}
  ]
}//ここはimportできない
const CompanyRegistration = (props) => {
  const [inputData, setInputData] = useState({});
  const [companyName, setCompanyData] = useState("");
  function setText(itemName, submitText){
    const newData = inputData;
    newData[itemName] = submitText;
    setInputData(newData);
  }
  function registCompany(){
    console.log("registcompany")
    const companyData = JSON.parse(localStorage.getItem("companyData"));
    companyData[companyName] = inputData;
    localStorage.setItem("companyData", JSON.stringify(companyData));
  }
  return (
    <IonPage>
    <Header name="企業登録"/>
      <IonContent fullscreen>
        <IonInput placeholder="企業名を入力" onIonChange={(e) => {setCompanyData(e.detail.value)}}></IonInput>
        {data.contents.map((data,i) => {
          return (
            <IonCard>
            <IonCardHeader>
              <IonCardTitle>
                {data.item}
                <IonItem>
                <IonIcon icon={star}>aiuro</IonIcon>
            <IonRange min="1" max="5" step="1" value="3" snaps color="danger">
              {/* <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon> */}
              {/* <ion-icon slot="end" color="danger" name="thermometer"></ion-icon> */}
            </IonRange>
          </IonItem>   
                </IonCardTitle>
                <IonInput placeholder="説明を入力" onIonChange={(e)=>{setText(data.item, e.detail.value)}}></IonInput>
              </IonCardHeader>
              </IonCard>
          );
        })}
        <IonButton expand="block" onClick={()=>{registCompany()}} disabled={companyName==""}>企業を登録</IonButton>
      </IonContent>
      <Footer />
    </IonPage>
  );
};
export default CompanyRegistration;

