import React, { useState } from "react";
import {
    IonContent,
    IonPage,
    IonTitle,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonIcon,
    IonCardContent,
    IonActionSheet,
} from "@ionic/react";
import Header from '../pages/Header';
import Footer from '../pages/Footer';
import { star, trash, close, create, navigate } from "ionicons/icons";
import {useHistory} from "react-router-dom"

const Detail = (props) => {
    const name = props.match.params.name.substr(1)
    const data = JSON.parse(localStorage.companyData)
    const [showAction, setShowAction] = useState(false)
    let history = useHistory()
    return (
        <IonPage>
            <Header name={"企業情報"} click={setShowAction} flag={true} />
            <IonContent fullscreen>
                <IonTitle>選択した企業 : {name}</IonTitle>
                {Object.entries(data[name]).map(value => {
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
                <IonActionSheet
                    isOpen={showAction}
                    onDidDismiss={() => setShowAction(false)}
                    header="変更・削除"
                    buttons={[{
                        text: "削除",
                        role: "destructive",
                        icon: trash,
                        handler:() => {
                            history.push("/tab1")
                            delete data[name]
                            //localStorage.companyData = JSON.stringify(data)
                        }
                    }, {
                        text: "変更",
                        icon: create,
                        handler: () => {
                            history.push("edit/:")
                        }
                    }, {
                        text: "閉じる",
                        role: "cancel",
                        icon: close
                    }]}
                />
            </IonContent>
            <Footer />
        </IonPage>
    );
}
export default Detail;