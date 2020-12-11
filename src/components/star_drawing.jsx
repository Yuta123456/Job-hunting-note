import React　from "react";
import {
    IonItem,
    IonIcon,
    IonLabel
} from "@ionic/react";
import { star } from "ionicons/icons";
const starDrawing = (props) => {
    const starCount = [1, 2, 3, 4, 5]
    let color = ""
    return (
        <IonItem>
          <IonLabel>{"適合度　"}</IonLabel>
          {starCount.map((data) => {(
            data <= props.inputData[props.values[0]][1]) ? color = "warning" : color = "medium"
            return (
              <IonIcon icon = {star} color = {color} key = {data} onClick={(e) => { props.setEval(props.values[0], data)}}/>
            )
          })}
        </IonItem>
    )
};
export default starDrawing;

