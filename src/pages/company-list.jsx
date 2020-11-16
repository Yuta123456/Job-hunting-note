import React from "react";
import {
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonCard,
  IonCardContent,
  IonCardTitle,
  IonCardSubtitle,
  IonCardHeader,
  IonIcon
} from "@ionic/react";
import { star } from 'ionicons/icons';
import ExploreContainer from "../components/ExploreContainer";
import Header from "./Header"
const companyData = [{
  name: "三菱UFJ",
  value: 3.5,
  data: {
    企業理念: "",
    福利厚生: "",
    年収月収: "",
    昇給制度: ""
  }
}, {
  name: "日本大学",
  value: 0.8,
  data: {
    企業理念: "",
    福利厚生: "",
    年収月収: "",
    昇給制度: ""
  }
}, {
  name: "エイチアイ",
  value: 5.0,
  data: {
    企業理念: "",
    福利厚生: "",
    年収月収: "",
    昇給制度: ""
  }
}, {
  name: "ゆめみ",
  value: 5.0,
  data: {
    企業理念: "",
    福利厚生: "",
    年収月収: "",
    昇給制度: ""
  }
}];

const Detail = (props) => {
  console.log("OK")
}
const Tab1 = () => {
  const handleClick = (data) => {
    console.log(data)
    return (
      <Detail data={data} />
    )
  }
  return (
    <IonPage>
      <Header name="企業一覧" />
      <IonContent fullscreen>
        {companyData.map((data) =>
          <IonCard onClick= {(() => <Detail companyName = {data.neme} data = {data.data} />)}>
            <IonCardHeader>
              <IonCardTitle>{data.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonIcon icon={star}>aiuro</IonIcon> {data.value}
            </IonCardContent>
          </IonCard>
        )}
      </IonContent>
    </IonPage>
  );
};

export default Tab1;
