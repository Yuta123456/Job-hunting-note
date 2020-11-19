import React from "react";
import {
  IonButtons,
  IonToolbar,
  IonTitle,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { ellipsisHorizontal } from "ionicons/icons";


const Header = (props) => {
  return (
    <IonToolbar color="primary">
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
