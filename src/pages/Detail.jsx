import React, { useState } from "react";
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
    IonRange,
    IonCardContent
} from "@ionic/react";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { starOutline, ellipsisHorizontal, star } from "ionicons/icons";
const Detail = (props) => {
    const name = props.match.params.name.substr(1)
    const data = JSON.parse(localStorage.companyData)
    return (
        <IonPage>
            <Header name={"企業情報"} />
            <IonContent fullscreen>
                <IonTitle>選択した企業 : {name}</IonTitle>
                {Object.entries(data[name]).map(value => {
                    console.log(value)
                    return (
                        <IonCard>
                            <IonCardHeader>
                                <IonCardTitle>{value[0] + " "}
                                    <IonIcon icon={star}>aiuro</IonIcon>
                                    {" " + value[1][1]}
                                </IonCardTitle>
                            </IonCardHeader>
                            <IonCardContent>
                                {value[1][0]}
                            </IonCardContent>
                        </IonCard>
                    )
                })}
            </IonContent>
            <Footer />
        </IonPage>
    );
}
export default Detail;