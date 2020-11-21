import React from 'react';
import { IonContent,IonPage,IonSlides, IonSlide} from '@ionic/react';
import './SetObjectiveModal.css'
import Slide1 from '../slides/slide1'
import Slide2 from '../slides/slide2'
import Slide3 from '../slides/slide3'

export const SetObjectivePage = (props) => {  
    
    return (
        <IonPage>
            <IonContent fullscreen class="ion-padding" scroll-y="false">
                
                <IonSlides>
                    <IonSlide>
                        <div className="slide">
                            <Slide1/>
                        </div>
                    </IonSlide>
                    <IonSlide>
                        <Slide2/>
                    </IonSlide>
                    <IonSlide>
                        <Slide3/>
                    </IonSlide>
                    {/* ここのSlideタブを増やせばSlideが増える */}
                </IonSlides>    
            </IonContent>
        </IonPage>
    );
};


                /* <IonHeader>
                    <IonToolbar>
                        <IonTitle>就活ノートへようこそ！</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <IonButton routerLink="./tab1" onClick={()=>{setSubmitObjective()}}>
                    就活ノートを始める
                </IonButton> */


export default SetObjectivePage;