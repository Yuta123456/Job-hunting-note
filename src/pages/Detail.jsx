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
    IonModal,
    IonHeader,
} from "@ionic/react";
import { star, trash, close, create, pencil, ellipsisHorizontal } from "ionicons/icons";
import { useHistory } from "react-router-dom"
import Edit from "./company-edit"

const createHtml = text => {
    return { __html: text.replace(/(\r\n|\n|\r)/gm, '<br />') };
}

const memoColor = {
    color: "black"
}
const Detail = (props) => {
    const data = JSON.parse(localStorage.companyData)
    const showStar = [1, 2, 3, 4, 5]
    const [showAction, setShowAction] = useState(false)
    const [showAlert, setShowAlert] = useState(false)
    const [showModal, setShowModal] = useState(false)
    const [companyName, setCompanyName] = useState(props.match.params.name);
    let history = useHistory();
    let color = "";
    if (data[companyName] === undefined) {
        data[companyName] = {}
    }
    return (
        <IonPage>
            <IonHeader>
                <IonToolbar color="primary">
                    <IonButtons slot="start">
                        <IonBackButton defaultHref="/list" />
                    </IonButtons>
                    <IonButtons slot="end">
                        <IonButton slot="end" onClick={() => { setShowAction(true) }}><IonIcon
                            slot="icon-only"
                            color="dark"
                            icon={ellipsisHorizontal}
                        ></IonIcon>
                        </IonButton>
                    </IonButtons>
                    <IonTitle style={{ textAlign: "center" }}>企業情報</IonTitle>
                </IonToolbar>
            </IonHeader>
            <IonContent fullscreen>
                <div className="ion-text-center ion-padding" style={{ fontSize: "30px" }}>{companyName}</div>
                {Object.entries(data[companyName]).map(value => {
                    return (
                        <IonCard key={value}>
                            <IonCardHeader>
                                <IonCardTitle>
                                    {value[0] + " "}
                                </IonCardTitle>
                                <IonCardSubtitle>
                                    {showStar.map((data) => {
                                        (data <= value[1][1]) ? color = "warning" : color = "medium"
                                        return (
                                            (value[1][1] !== 0) && <IonIcon icon = {star} color = {color} key = {data}></IonIcon>
                                        )
                                    })}
                                    {(value[1][1] !== 0) && " " + value[1][1]}
                                </IonCardSubtitle>
                            </IonCardHeader>
                            <IonCardContent>
                                <IonIcon icon={pencil}></IonIcon>
                                <span style={memoColor}>{"メモ"}</span>
                                <div dangerouslySetInnerHTML={createHtml(value[1][0])} />
                            </IonCardContent>
                        </IonCard>
                    )
                })}
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
                            setShowModal(true)
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
                            delete data[companyName]
                            localStorage.companyData = JSON.stringify(data)
                            history.push("/list")
                        })
                    }]}
                />
                <IonModal
                    isOpen={showModal}
                    swipeToClose={true}
                    onDidDismiss={() => setShowModal(false)}
                >
                    <Edit name={companyName} setShowModal={setShowModal} setCompanyName={setCompanyName}/>
                </IonModal>
            </IonContent>
        </IonPage>
    );
}
export default Detail;