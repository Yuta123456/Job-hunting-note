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
  IonRange,
  IonTextarea
} from "@ionic/react";
import { starOutline, ellipsisHorizontal, star } from "ionicons/icons";
import "./Tab3.css";
import interviewQuestionItem from '../data/interviewQuestionItem'
import informationQuestionItem from '../data/informationQuestionItem';
// import "./company-information.css";
const propose = "interview"
//ここはimportできない
const CompanyRegistration = (props) => {
  let questionItem = [];
  const objective = localStorage.getItem("objective");
  if (objective === "面接対策"){
    questionItem = interviewQuestionItem;
  }else if (objective === "企業情報"){
    questionItem = informationQuestionItem;
  }
  const dic = {};
  questionItem.forEach((key) => {dic[key] = ["", 1]});
  const [inputData, setInputData] = useState(dic);
  const [companyName, setCompanyName] = useState("");
  /* ここ付け足した */
  const [text, setData] = useState("")
  const [name, setName] = useState("")
  
  function setText(itemName, submitText) {
    const newData = inputData;
    newData[itemName][0] = submitText
    setInputData(newData);
  }
  function setEval(itemName, submitEval) {
    const newData = inputData;
    newData[itemName][1] = submitEval
    setInputData(newData);
  }
  function registCompany() {
    const companyData = JSON.parse(localStorage.getItem("companyData"));
    companyData[companyName] = inputData;
    localStorage.setItem("companyData", JSON.stringify(companyData));
    //initializeData
    questionItem.forEach((key) => {dic[key] = ["", 1]});
    setInputData(dic);
    setCompanyName("");
  }
  return (
    <IonPage>
      <Header name="企業登録" />
      <IonContent fullscreen>

        <form className="ion-padding">
          <IonInput placeholder="企業名を入力" value = {companyName} onIonChange={(e) => { setCompanyName(e.detail.value) }} clearInput={true}></IonInput>
          {questionItem.map((data) => {
            return (
              <IonCard>
                <IonCardHeader>
                  <IonCardTitle>
                    {data}
                    <IonItem>
                      <IonLabel color="dark">評価</IonLabel>
                      <IonIcon icon={star}></IonIcon>
                      <IonRange min="1" max="5" step="1" value="1" snaps color="danger" 
                      onIonChange={(e) => { setEval(data, e.detail.value) }
                      } disabled={companyName===""} >
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

