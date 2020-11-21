import React from 'react';
import { IonContent,IonButton,IonHeader, IonToolbar,
      IonTitle, IonPage} from '@ionic/react';

const SetObjectivePage = (props) => {
    function setSubmitObjective(){
        localStorage.setItem("objective","面接対策");
        localStorage.setItem("visited","true");
        localStorage.setItem("companyData",JSON.stringify({}));
    };
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>就活ノートへようこそ！</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton routerLink="./tab1" onClick={()=>{setSubmitObjective()}}>
                    就活ノートを始める
                </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default SetObjectivePage;