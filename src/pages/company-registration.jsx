import React, { useState } from "react";
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonRange,
  IonTextarea,
  IonToast,IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./Tab3.css";
import interviewQuestionItem from '../data/interviewQuestionItem'
import informationQuestionItem from '../data/informationQuestionItem';
import registMessage from '../data/registMessage';
import { useHistory } from "react-router";
const companyNameStyle = {
  fontSize:"2em",
  textAlign:"center"
}
const companyItemStyle = {
  fontSize:"0.7em",
}
const CompanyRegistration = (props) => {
  let questionItem = [];
  const [message, setMessage] = useState("")
  const objective = localStorage.getItem("objective");
  if (objective === "面接対策"){
    questionItem = interviewQuestionItem;
  }else if (objective === "企業情報"){
    questionItem = informationQuestionItem;
  }
  const dic = {};
  questionItem.forEach((key) => {dic[key[0]] = (key[1]) ? ["", 1] : ["", 0]});
  const [inputData, setInputData] = useState(dic);
  const [companyName, setCompanyName] = useState("");
  const [showToast, setShowToast] = useState(false);
  const [registCompanyNum, setRegistCompanyNum] = useState(0);
  let history = useHistory();
  /* ここ付け足した */
  const text = "";
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
    questionItem.forEach((key) => {dic[key[0]] = (key[1]) ? ["", 1] : ["", 0]});
    setInputData(dic);
    setCompanyName("");
    if (!("count" in localStorage)){
      localStorage.setItem("count",0)
    }
    const newRegistCompanyNum = parseInt(localStorage.getItem("count")) + 1
    console.log(registCompanyNum)
    setRegistCompanyNum(newRegistCompanyNum);
    localStorage.setItem("count", newRegistCompanyNum)
    if(localStorage.count in registMessage){
      setMessage(localStorage.count + "社目登録完了！" + registMessage[localStorage.count])
    }else{
      setMessage(localStorage.count + "社目登録完了！")
    }
    setShowToast(true);
    //history.push('/tab1');
    history.goBack();
  }
  return (
    <IonPage>
      <IonToolbar color="primary">
        <IonButtons slot="start">
            <IonBackButton defaultHref="/tab1" />
        </IonButtons>
        <IonTitle>企業登録</IonTitle>
      </IonToolbar>
      <IonContent fullscreen>
          <IonCard>
            <IonCardHeader>
              <IonCardTitle  style={companyNameStyle}>
                <IonTextarea 
                placeholder="※最初に企業名を入力" 
                value = {companyName}
                onIonChange={(e) => { setCompanyName(e.detail.value) }}
                size="small"
                clearInput={true}
                ></IonTextarea>
              </IonCardTitle>
            </IonCardHeader>
          {questionItem.map((data) => {
            return (
              <IonCard key={data[0]}>
                <IonCardHeader>
                  <IonCardTitle>
                    <span style={companyItemStyle}>{data[0]}</span>
                    <IonItem>
                      { data[1] && <IonLabel color="dark">評価</IonLabel>}
                      { data[1] && <IonIcon icon={star} color="warning"/>}
                      { data[1] && <IonRange min="1" max="5" step="1" value="1" snaps color="primary" 
                      onIonChange={(e) => { setEval(data[0], e.detail.value) }
                      } disabled={companyName===""}></IonRange>}
                    </IonItem>
                  </IonCardTitle>
                  <IonTextarea placeholder="説明を入力" value = {text} onIonChange={(e) => { setText(data[0], e.detail.value) }} disabled={companyName === ""}></IonTextarea>
                </IonCardHeader>
              </IonCard>
            );
          })}
          </IonCard>
          <IonButton expand="block" onClick={() => { registCompany() }} disabled={companyName === ""}>企業を登録</IonButton>
        {/* </form> */}
        <IonToast
        isOpen={false}
        onDidDismiss={() => setShowToast(false)}
        message={message}
        position="top"
        duration={1000}
        />
      </IonContent>
    </IonPage>
  );
};
export default CompanyRegistration;

