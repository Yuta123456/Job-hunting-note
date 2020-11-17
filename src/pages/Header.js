
import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

const Header = (props) => {
  return (
    <IonToolbar color="success">
      {props.flag &&
        <IonButtons slot="primary">
          <IonButton
            onClick={() => {
              props.click(true);
            }}
          >
            <IonIcon
              slot="icon-only"
              color="dark"
              icon={ellipsisHorizontal}
            ></IonIcon>
          </IonButton>
        </IonButtons>
      }
      <IonTitle>{props.name}</IonTitle>
    </IonToolbar>
  );

};

export default Header;
