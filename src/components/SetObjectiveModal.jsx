import React from 'react';
import { IonContent,IonPage,IonSlides} from '@ionic/react';
import './SetObjectiveModal.css'
import Slide1 from '../slides/slide1'
import Slide2 from '../slides/slide2'
import Slide3 from '../slides/slide3'
import Slide4 from '../slides/slide4'
import Slide5 from '../slides/slide5'

export const SetObjectivePage = (props) => {  
    
    return (
        <IonPage>
            <IonContent fullscreen class="ion-padding" scroll-y="false">
                <IonSlides>
                    <Slide1/>
                    <Slide2/>
                    <Slide3/>
                    <Slide4/>
                    <Slide5/>
                    {/* ここのSlideタブを増やせばSlideが増える */}
                </IonSlides>    
            </IonContent>
        </IonPage>
    );
};

export default SetObjectivePage;
