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
  IonTitle
} from "@ionic/react";
import { star } from "ionicons/icons";
import "./Tab3.css";
import interviewQuestionItem from '../data/interviewQuestionItem'
import informationQuestionItem from '../data/informationQuestionItem';
import registMessage from '../data/registMessage';
const companyNameStyle = {
  fontSize: "2em",
  textAlign: "center"
}
const companyItemStyle = {
  fontSize: "0.7em",
}
const CompanyRegistration = (props) => {
  let questionItem = [];
  const objective = localStorage.getItem("objective");
  if (objective === "面接対策") {
    questionItem = interviewQuestionItem;
  } else if (objective === "企業情報") {
    questionItem = informationQuestionItem;
  }
  const dic = {};
  questionItem.forEach((key) => { dic[key[0]] = (key[1]) ? ["", 1] : ["", 0] });
  const [inputData, setInputData] = useState(dic);
  const [companyName, setCompanyName] = useState("");
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
    //history.push('/tab1');
    props.setShowModal(false)
    props.setShowToast(true)
  }
  return (
    <IonContent fullscreen>
      <IonToolbar color="primary">
        <IonTitle onclick={() => props.setShowModal(false)} style={{ textAlign: "center" }}>閉じる</IonTitle>
      </IonToolbar>
        <IonTextarea
          placeholder="※最初に企業名を入力"
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
      <IonButton expand="block" onClick={() => { registCompany() }} disabled={companyName === ""}>企業を登録</IonButton>
      {/* </form> */}
    </IonContent>
  );
};
export default CompanyRegistration;

