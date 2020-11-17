import React, { useEffect, useState } from 'react';
import { IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';

const Header = (props) => {
    return (
        <IonHeader>
            <IonToolbar color = "success">
                <IonTitle>{props.name}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};

export default Header;
