import React, { useEffect, useState } from 'react';
import { IonContent,IonButton,IonButtons,
     IonMenuButton, IonHeader, IonToolbar,
      IonTitle, IonModal, IonPage,
       useIonViewWillEnter,useIonViewDidLeave,
    　IonLabel, IonItem,
IonItemGroup,IonItemDivider,
IonList,IonRadioGroup, IonListHeader,
IonRadio, IonNote} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Link } from 'react-router-dom';


const SetObjectivePage = (props) => {
    const [selected, setSelected] = useState("");
    function setSubmitObjective(){
        props.setObj(selected);
        localStorage.setItem("visited","true");
    };
    return (
        <IonPage>
            <IonContent fullscreen>
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
                            <IonNote>説明文</IonNote>
                        </IonList>
                        <IonRadio slot="start" value="企業情報" />
                    </IonItem>
                </IonRadioGroup>
                <IonItemDivider>Your Selection</IonItemDivider>
                <IonItem>{selected ?? '(none selected'}</IonItem>
                </IonList>
                    <IonButton routerLink="./tab1" onClick={()=>{setSubmitObjective()}} disabled={selected==""}>
                        就活ノートを始める
                    </IonButton>
            </IonContent>
        </IonPage>
    );
};

export default SetObjectivePage;