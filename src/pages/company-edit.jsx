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
const CompanyEdit = (props) => {
  const name = props.match.params.name.substr(1)
  const data = JSON.parse(localStorage.companyData)
  console.log(name,data)
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
    <Header name="企業編集"/>
      <IonContent fullscreen>
        <IonInput placeholder="企業名を入力" value={data} onIonChange={(e) => {setCompanyData(e.detail.value)}}></IonInput>
         
        <IonButton expand="block" onClick={()=>{registCompany()}} disabled={companyName==""}>編集を完了する</IonButton>
      </IonContent>
      <Footer />
    </IonPage>
  );
};
export default CompanyEdit;


// {Object.entries(data[name]).map(value=> {
//     {console.log(values)}
// //   return (
// //     <IonCard>
// //     <IonCardHeader>
// //       <IonCardTitle>
// //         {values[0]}
// //         <IonItem>
// //         <IonIcon icon={star}>aiuro</IonIcon>
// //     <IonRange min="1" max="5" step="1" value={String(values[1][1])} snaps color="danger">
// //       {/* <ion-icon slot="start" size="small" color="danger" name="thermometer"></ion-icon> */}
// //       {/* <ion-icon slot="end" color="danger" name="thermometer"></ion-icon> */}
// //     </IonRange>
// //   </IonItem>   
// //         </IonCardTitle>
// //         <IonInput placeholder="説明を入力" value={values[1][0]} onIonChange={(e)=>{setText(data.item, e.detail.value)}}></IonInput>
// //       </IonCardHeader>
// //       </IonCard>
// //   );
// })}