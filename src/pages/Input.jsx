import React, { useState } from "react";
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
    IonIcon,
    IonInput,
    IonItem,
    IonLabel,
    IonButton
} from "@ionic/react";
import { star } from 'ionicons/icons';
import ExploreContainer from "../components/ExploreContainer";
import Header from "./Header"
//let inputData = require("")
const inputData = {
    企業名: "",
    企業理念: "",
    福利厚生: "",
    年収月収: "",
    昇給制度: ""
}
console.log(inputData)
const Tab2 = () => {
    const [companyName, setCompanyName] = useState("")
    const handleChange = (e) => {
        setCompanyName(e.target.value)
    }
    const handleClick = () => {
        console.log()
    }
    return (
        <IonPage>
            <Header name={"企業登録"} />
            <IonContent fullscreen>
                <form className="ion-padding">
                    <IonItem lines="full" className="ion-padding-bottom">
                        <IonInput type="text" value={companyName} placeholder="企業名を入力" onChange={handleChange}></IonInput>
                    </IonItem>
                </form>
                {Object.entries(inputData).map((key, data) => {
                    return (
                        <IonCard>
                            <IonCardHeader>
                    <IonCardTitle>{key}</IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonIcon icon={star}>{data}</IonIcon>
                                <IonInput placeholder =　"説明を入力"></IonInput>
                            </IonCardContent>
                        </IonCard>
                    )
                })}

            <IonButton expand = "block" onClick = {handleClick} color = "success">保存</IonButton>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
