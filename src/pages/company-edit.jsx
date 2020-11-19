import React, { useEffect, useState } from "react";
import Header from './Header';
import Footer from './Footer';
import {
  IonContent,

  IonPage,

  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonLabel,
  IonInput,
  IonIcon,
  IonRange,
  IonTextarea,
  useIonViewDidLeave,
  useIonViewWillEnter
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./Tab3.css";
import { useLocation } from "react-router-dom";
import interviewQuestionItem from '../data/interviewQuestionItem'
import informationQuestionItem from '../data/informationQuestionItem';
// import "./company-information.css";

let questionItem = [];
const CompanyEdit = (props) => {
  if (props.obj === "面接対策"){
    questionItem = interviewQuestionItem;
  }else if (props.obj === '企業情報'){
    questionItem = informationQuestionItem;
  }
  const { pathname } = useLocation();
  const name = props.match.params.name.substr(1);
  const data = JSON.parse(localStorage.companyData);
  if(data[name] === undefined){
        data[name] = {}
  }
  const [inputData, setInputData] = useState(data[name]);
  const [companyName, setCompanyName] = useState(name);
  useEffect(() =>{
    console.log("useEffect");
    setCompanyName(name);
  },[pathname, name]);

  useIonViewWillEnter(() =>{
    setInputData(data[name]);
  });
  function setText(itemName, submitText){
    const newData = inputData;
    if (itemName in newData){
      newData[itemName][0] = submitText
    }else{
      newData[itemName] = [submitText, 1];
    }
    setInputData(newData);
  }
  function setEval(itemName, submitEval){
    const newData = inputData;
    if (itemName in newData){
      newData[itemName][1] = submitEval
    }else{
      newData[itemName] = ["", submitEval];
    }
    setInputData(newData);
  }
  function editCompany(){//editCompanyで空になる
    const companyData = JSON.parse(localStorage.getItem("companyData"));
    delete companyData[name]
    companyData[companyName] = inputData;
    localStorage.setItem("companyData", JSON.stringify(companyData));
    const dic = {};
    questionItem.forEach((key) => {dic[key] = ["", 1]});
    setInputData(dic);
    setCompanyName(null);
  }
  useIonViewDidLeave(() =>{
    setCompanyName(null);

  })
  return (
    <IonPage>
    <Header name="企業編集" flag={false}/>
      <IonContent fullscreen>
        <IonInput placeholder="企業名を入力" value={companyName} onIonChange={(e) => {setCompanyName(e.detail.value)}} clearInput={true} disabled={true}></IonInput>
        {Object.entries(data[name]).map(values => {
          return (
            <IonCard key={values}>
            <IonCardHeader>
              <IonCardTitle>
                {values[0]}
                <IonItem>
                <IonLabel color="dark">評価</IonLabel>
                <IonIcon icon={star} color = "warning"></IonIcon>
            <IonRange min="1" max="5" step="1" value={String(values[1][1])} snaps color="danger" onIonChange={(e) =>{setEval(values[0], e.detail.value)}}>
            </IonRange>
          </IonItem>   
                </IonCardTitle>
                <IonTextarea placeholder="説明を入力" value={values[1][0]} onIonChange={(e)=>{setText(values[0], e.detail.value)}}/>
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

