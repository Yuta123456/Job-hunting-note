import React, { useEffect, useState } from 'react';
import { IonContent,IonButton,IonButtons,
     IonMenuButton, IonHeader, IonToolbar,
      IonTitle, IonModal, IonPage,
       useIonViewWillEnter,useIonViewDidLeave,
    　IonLabel, IonItem,
IonItemGroup,IonItemDivider,
IonList,IonRadioGroup, IonListHeader,
IonRadio} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route, Link } from 'react-router-dom';


const SetObjectivePage = (props) => {
    const [selected, setSelected] = useState("");
    useIonViewDidLeave(() => {
        props.setVisit(true);
        props.setObj(selected);
        localStorage.setItem("visited","true");
        console.log("SetItem");
    });
    return (
        <IonPage>
            <IonContent fullscreen>
                <IonList>
                <IonRadioGroup value={selected} onIonChange={e => setSelected(e.detail.value)}>
                    <IonListHeader>
                    <IonLabel>あなたが就活ノートを作る目的は何ですか？</IonLabel>
                    </IonListHeader>

                    <IonItem>
                        <IonLabel>面接対策</IonLabel>
                        <IonRadio slot="start" value="面接対策" />
                    </IonItem>

                    <IonItem>
                        <IonLabel>企業比較</IonLabel>
                        <IonRadio slot="start" value="企業比較" />
                    </IonItem>
                </IonRadioGroup>
                <IonItemDivider>Your Selection</IonItemDivider>
                <IonItem>{selected ?? '(none selected'}</IonItem>
                </IonList>
                    <Link to="./Tab2">
                        <IonButton>
                            就活ノートを始める
                        </IonButton>
                    </Link>
                
            </IonContent>
        </IonPage>
    );
};

export default SetObjectivePage;