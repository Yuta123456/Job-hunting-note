import React, { useState } from "react";
import {
    IonContent,
    IonPage,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonCardContent,
    IonActionSheet,
    IonAlert, 
    IonCardSubtitle,
    IonToolbar,
    IonTitle,
    IonBackButton,
    IonButtons,
    IonButton,
} from "@ionic/react";
import { star, trash, close, create, pencil,ellipsisHorizontal} from "ionicons/icons";
import { useHistory } from "react-router-dom"

const Detail = (props) => {
    const name = props.match.params.name.substr(1)
    const data = JSON.parse(localStorage.companyData)
    const showStar = [1, 2, 3, 4, 5]
    const [showAction, setShowAction] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    let history = useHistory()
    if (data[name] === undefined) {
        data[name] = {}
    }
    let color = ""
    return (
        <IonPage>
            <IonToolbar color="primary">
                <IonButtons slot="start">
                    <IonBackButton defaultHref="/tab1" />
                </IonButtons>
                <IonButtons slot="end">
                    <IonButton slot="end" onClick={()=>{setShowAction(true)}}><IonIcon
                        slot="icon-only"
                        color="dark"
                        icon={ellipsisHorizontal}
                        ></IonIcon>
                    </IonButton>
                </IonButtons>
                <IonTitle>企業情報</IonTitle>
            </IonToolbar>
            <IonContent fullscreen>
                <IonCard>
                    <IonCardHeader>
                        <IonCardTitle class="ion-text-center" className="title">{name}</IonCardTitle>
                    </IonCardHeader>
                    {Object.entries(data[name]).map(value => {
                        return (
                            <IonCard key={value}>
                                <IonCardHeader>
                                    <IonCardTitle>
                                        {value[0] + " "}
                                    </IonCardTitle>
                                    <IonCardSubtitle>
                                    {showStar.map((data) => {
                                        data <= value[1][1] ? color = "warning" : color = "medium"
                                        return (
                                            <IonIcon icon={star} color={color} key={data}>aiueo</IonIcon>
                                        )

                                    })}
                                    {" " + value[1][1]}
                                    </IonCardSubtitle>
                                </IonCardHeader>
                                <IonCardContent>
                                    <IonIcon icon={pencil}></IonIcon>
                                    {value[1][0]}
                                </IonCardContent>
                            </IonCard>
                        )
                    })}
                </IonCard>
                <IonActionSheet
                    isOpen={showAction}
                    onDidDismiss={() => setShowAction(false)}
                    header="変更・削除"
                    buttons={[{
                        text: "削除",
                        role: "destructive",
                        icon: trash,
                        handler: () => {
                            setShowAlert(true)
                        }
                    }, {
                        text: "変更",
                        icon: create,
                        handler: () => {
                            history.push("/edit/:" + name)
                        }
                    }, {
                        text: "閉じる",
                        role: "cancel",
                        icon: close
                    }]}
                />
                <IonAlert
                    isOpen={showAlert}
                    onDidDismiss={() => setShowAlert(false)}
                    header="削除してよろしいですか？"
                    buttons={[{
                        text: "閉じる",
                    }, {
                        text: "削除",
                        handler: (() => {
                            delete data[name]
                            localStorage.companyData = JSON.stringify(data)
                            history.push("/tab1")

                        })
                    }]}
                />
            </IonContent>
        </IonPage>
    );
}
export default Detail;