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
  useIonViewDidEnter,
  IonPage,
  IonButtons,
  IonHeader,
  IonInput
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./Tab3.css";
import interviewQuestionItem from '../data/interviewQuestionItem'
import { useHistory } from "react-router";
// import "./company-information.css";
const companyItemStyle = {
  fontSize: "0.7em",
}

const CompanyEdit = (props) => {
  let name = props.name;
  let history = useHistory();
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
    const newData = inputData;
    if (itemName in newData) {
      newData[itemName][0] = submitText
    } else {
      newData[itemName] = [submitText, 1];
    }
    setInputData(newData);
  }
  function setEval(itemName, submitEval) {
    const newData = inputData;
    if (itemName in newData) {
      newData[itemName][1] = submitEval
    } else {
      newData[itemName] = ["", submitEval];
    }
    setInputData(newData);
  }
  function editCompany() {//editCompanyで空になる
    const companyData = JSON.parse(localStorage.getItem("companyData"));
    delete companyData[name]
    companyData[companyName] = inputData;
    localStorage.setItem("companyData", JSON.stringify(companyData));
    const dic = {};
    questionItem.forEach((key) => { dic[key[0]] = (key[1]) ? ["", 1] : ["", 0] });
    setInputData(dic);
    history.replace("/detail/"+companyName)
    props.setCompanyName(companyName);
    setCompanyName(null);
    props.setShowModal(false);
  }
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="primary">
          <IonButtons slot="start">
            <IonButton onClick={() => props.setShowModal(false)}>キャンセル</IonButton>
          </IonButtons>
          <IonButtons slot="end">
            <IonButton onClick={() => { editCompany() }} disabled={companyName === ""} >編集を保存</IonButton>
          </IonButtons>
          <IonTitle style={{ textAlign: "center" }} >企業編集</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
          <IonInput value={companyName}
           className="ion-text-center ion-padding" 
           required={true}
           onIonChange={(e) => setCompanyName(e.detail.value)}
           style={{ fontSize: "30px" }}/>
        {questionItem.map((values) => {
          return (
            <IonCard key={values[0]}>
              <IonCardHeader>
                <IonCardTitle>
                  <span style={companyItemStyle}>
                    {values[0]}
                  </span>
                  <IonItem>
                    {values[1] && <IonLabel color="dark">適合度</IonLabel>}
                    {values[1] && <IonIcon icon={star} color="warning"></IonIcon>}
                    {values[1] && <IonRange min="1" max="5" step="1" value={(inputData[values[0]] !== null) && String(inputData[values[0]][1])} snaps color="primary" onIonChange={(e) => { setEval(values[0], e.detail.value) }}>
                    </IonRange>}
                  </IonItem>
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

