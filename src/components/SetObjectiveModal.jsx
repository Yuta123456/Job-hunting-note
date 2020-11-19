import React, { useState } from 'react';
import { IonContent,IonButton,IonHeader, IonToolbar,
      IonTitle, IonPage,
    　IonLabel, IonItem,
IonList,IonRadioGroup, IonListHeader,
IonRadio, IonNote} from '@ionic/react';

const SetObjectivePage = (props) => {
    const [selected, setSelected] = useState("");
    function setSubmitObjective(){
        localStorage.setItem("objective",selected);
        localStorage.setItem("visited","true");
        localStorage.setItem("companyData",JSON.stringify({}));
    };
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonHeader>
                    <IonToolbar>
                        <IonTitle>就活ノートの目的をお聞かせください</IonTitle>
                    </IonToolbar>
                </IonHeader>
            
                <IonList>
                <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                    <IonListHeader>
                    <IonLabel>あなたが就活ノートを作る目的は何ですか？</IonLabel>
                    </IonListHeader>
                    <IonItem>
                        <IonList>
                            <IonLabel>面接対策</IonLabel>
                            <IonNote>面接対策に役立つ項目がピックアップされたノートを作れます</IonNote>
                        </IonList>
                        <IonRadio slot="start" value="面接対策" />
                    </IonItem>
                    
                    <IonItem>
                        <IonList>
                            <IonLabel>企業情報</IonLabel>
                            <IonNote>企業情報をメモするための項目がピックアップされたノートを作れます</IonNote>
                        </IonList>
                        <IonRadio slot="start" value="企業情報" />
                    </IonItem>
                </IonRadioGroup>               
                </IonList>
                    <IonButton routerLink="./tab1" onClick={()=>{setSubmitObjective()}} disabled={selected===""}>
                        就活ノートを始める
                    </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default SetObjectivePage;