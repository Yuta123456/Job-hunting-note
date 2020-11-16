
import React, { useEffect, useState } from 'react';
import { IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import "./Header.css"


const Header = (props) => {
    return (
        <IonHeader>
            <IonToolbar>
                <IonTitle>{props.name}</IonTitle>
            </IonToolbar>
        </IonHeader>
    )
};

export default Header;