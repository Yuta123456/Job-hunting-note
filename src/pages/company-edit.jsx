import React, { useState } from "react";
import {
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonTextarea,
  IonToolbar,
  IonTitle,
  useIonViewDidEnter,
  IonPage,
  IonButtons,
  IonHeader
} from "@ionic/react";
import StarDrawing from "../components/star_drawing"
import "./Tab3.css";
import interviewQuestionItem from '../data/interviewQuestionItem'
// import "./company-information.css";
const companyItemStyle = {
  fontSize: "0.7em",
}

const CompanyEdit = (props) => {
  let name = props.name;
  const data = JSON.parse(localStorage.companyData);
  const [inputData, setInputData] = useState(data[name]);
  const [companyName, setCompanyName] = useState(name);
  const questionItem = interviewQuestionItem;
  useIonViewDidEnter(() => {
    const newName = props.name;
    setCompanyName(newName);
    if (companyName !== null) {
      const newData = Object.assign({}, data[companyName]);
      setInputData(newData);
    }
  });
  function setText(itemName, submitText) {
    const newData = data[companyName];
    Object.entries(inputData, newData).map(values => 
        newData[values[0]] = values[1]
    )
    if (itemName in newData) {
      newData[itemName][0] = submitText
    } else {
      newData[itemName] = [submitText, 1];
    }
    setInputData(newData);
  }
  function setEval(itemName, submitEval) {
    /*　レンダリングするためには参照元同じだとダメだから新しく作って値格納する */
    const newData = data[companyName];
    Object.entries(inputData, newData).map(values => 
      newData[values[0]] = values[1]
    )
    if (itemName in newData) {
      newData[itemName][1] = submitEval
    } else {
      newData[itemName] = ["", submitEval];
    }
    setInputData(newData);
  }
  function editCompany() {//editCompanyで空になる
    const companyData = data;
    companyData[companyName] = inputData;
    localStorage.setItem("companyData", JSON.stringify(companyData));
    const dic = {};
    questionItem.forEach((key) => { dic[key[0]] = (key[1]) ? ["", 1] : ["", 0] });
    setInputData(dic);
    setCompanyName(null);
    props.setShowModal(false)
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={() => props.setShowModal(false)} >キャンセル</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => { editCompany() }} disabled={companyName === ""} >編集を保存</IonButton>
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }} >企業編集</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="ion-text-center ion-padding" style={{ fontSize: "30px" }}>{companyName}</div>
        {questionItem.map((values) => {
          return (
            <IonCard key={values[0]}>
              <IonCardHeader>
                <IonCardTitle>
                  <span style={companyItemStyle}>
                    {values[0]}
                  </span>
                  {values[1] && <StarDrawing inputData = {inputData} values = {values} setEval ={setEval} />}
                </IonCardTitle>
                <IonTextarea placeholder="説明を入力" value={inputData[values[0]][0]} onIonChange={(e) => { setText(values[0], e.detail.value) }} />
              </IonCardHeader>
            </IonCard>
          );
        })}
      </IonContent>
    </IonPage>
  );
};
export default CompanyEdit;