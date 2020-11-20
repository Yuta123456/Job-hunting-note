import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { list, create } from 'ionicons/icons';


const Footer = (props) => {
    return (
        <IonTabBar slot="bottom">
            <IonTabButton tab="tab1" href="/tab1">
                <IonIcon icon={list} />
                <IonLabel>企業一覧</IonLabel>
              </IonTabButton>
              <IonTabButton tab="tab2" href="/tab3">
                <IonIcon icon={create} />
                <IonLabel>分析</IonLabel>
            </IonTabButton>
        </IonTabBar>
    )
};

export default Footer;