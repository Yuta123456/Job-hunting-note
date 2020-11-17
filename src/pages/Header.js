import React, { useEffect, useState } from "react";
import {
  IonButtons,
  IonMenuButton,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { Redirect, Route } from "react-router-dom";

const Header = (props) => {
  return (
    <ion-toolbar color="success">
      {/* <ion-buttons slot="primary">
        <ion-button>
          <ion-icon
            slot="icon-only"
            color="dark"
            icon={ellipsisHorizontal}
          ></ion-icon>
        </ion-button>
      </ion-buttons> */}
      <ion-title>{props.name}</ion-title>
    </ion-toolbar>
  );
};

export default Header;
