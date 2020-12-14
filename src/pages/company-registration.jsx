import React, { useState } from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonItem,
  IonTextarea,
  IonToolbar,
  IonTitle,
  IonPage,
  IonButtons,
  IonHeader,
  IonInput
} from "@ionic/react";
import StarDrawing from "../components/star_drawing"
import "./Tab3.css";
import interviewQuestionItem from '../data/interviewQuestionItem'
import registMessage from '../data/registMessage';
const companyItemStyle = {
  fontSize: "0.7em",
}
const CompanyRegistration = (props) => {
  let questionItem = interviewQuestionItem;
  const dic = {};
  const [inputData, setInputData] = useState(dic);
  const [companyName, setCompanyName] = useState("");
  questionItem.forEach((key) => { dic[key[0]] = (key[1]) ? ["", 1] : ["", 0] });
  function setText(itemName, submitText) {
    const newData = inputData;
    newData[itemName][0] = submitText
    setInputData(newData);
  }

  function setEval(itemName, submitEval) {
    const newData = dic;
    Object.entries(inputData).map(values => 
      newData[values[0]] = values[1]
    )
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
        <IonInput value={companyName}
           placeholder="最初に企業名を入力"
           className="ion-text-center ion-padding"
           required={true} 
           onIonChange={(e) => setCompanyName(e.detail.value)}
           style={{ fontSize: "30px" }}/>
        {questionItem.map((data) => {
          return (
            <IonCard key={data[0]}>
              <IonCardHeader>
                <IonCardTitle>
                  <span style={companyItemStyle}>{data[0]}</span>
                  <IonItem>
                    {data[1] && <StarDrawing inputData = {inputData} values = {data} setEval = {setEval} />}
                  </IonItem>
                </IonCardTitle>
                <IonTextarea placeholder="説明を入力" value={inputData[data[0]][0]} onIonChange={(e) => { setText(data[0], e.detail.value) }} disabled={companyName === ""}></IonTextarea>
              </IonCardHeader>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
export default CompanyRegistration;

