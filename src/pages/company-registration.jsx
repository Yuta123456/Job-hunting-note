import React, { useState } from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonLabel,
  IonIcon,
  IonRange,
  IonTextarea,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonHeader
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./Tab3.css";
import interviewQuestionItem from '../data/interviewQuestionItem'
import registMessage from '../data/registMessage';
const companyNameStyle = {
  fontSize: "2em",
  textAlign: "center"
}
const companyItemStyle = {
  fontSize: "0.7em",
}
const CompanyRegistration = (props) => {
  let questionItem = interviewQuestionItem;
  const text = "";
  const dic = {};
  const [inputData, setInputData] = useState(dic);
  const [companyName, setCompanyName] = useState("");
  questionItem.forEach((key) => { dic[key[0]] = (key[1]) ? ["", 1] : ["", 0] });
  /*
  if (objective === "面接対策") {
    questionItem = interviewQuestionItem;
  } else if (objective === "企業情報") {
    questionItem = informationQuestionItem;
  }
  */
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
    questionItem.forEach((key) => { dic[key[0]] = (key[1]) ? ["", 1] : ["", 0] });
    setInputData(dic);
    setCompanyName("");
    if (!("count" in localStorage)) {
      localStorage.setItem("count", 0)
    }
    localStorage.setItem("count", parseInt(localStorage.getItem("count")) + 1)
    if (localStorage.count in registMessage) {
      props.setMessage(localStorage.count + "社目登録完了！" + registMessage[localStorage.count])
    } else {
      props.setMessage(localStorage.count + "社目登録完了！")
    }
    props.setShowModal(false)
    props.setShowToast(true)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={() => props.setShowModal(false)} color="light" >キャンセル</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => { registCompany() }} disabled={companyName === ""} color="light" >企業を登録</IonButton>
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }} >企業登録</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonTextarea
          style={companyNameStyle}
          placeholder="最初に企業名を入力"
          value={companyName}
          onIonChange={(e) => { setCompanyName(e.detail.value) }}
          size="small"
          clearInput={true}
        ></IonTextarea>
        {questionItem.map((data) => {
          return (
            <IonCard key={data[0]}>
              <IonCardHeader>
                <IonCardTitle>
                  <span style={companyItemStyle}>{data[0]}</span>
                  <IonItem>
                    {data[1] && <IonLabel color="dark">適合度</IonLabel>}
                    {data[1] && <IonIcon icon={star} color="warning" />}
                    {data[1] && <IonRange min="1" max="5" step="1" value="1" snaps color="primary"
                      onIonChange={(e) => { setEval(data[0], e.detail.value) }
                      } disabled={companyName === ""}></IonRange>}
                  </IonItem>
                </IonCardTitle>
                <IonTextarea placeholder="説明を入力" value={text} onIonChange={(e) => { setText(data[0], e.detail.value) }} disabled={companyName === ""}></IonTextarea>
              </IonCardHeader>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
export default CompanyRegistration;

