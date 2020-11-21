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

// import React from 'react';
// import { IonContent,IonButton,IonHeader, IonToolbar,
//       IonTitle, IonPage} from '@ionic/react';


      
// const SetObjectivePage = (props) => {
//     function setSubmitObjective(){
//         localStorage.setItem("objective","面接対策");
//         localStorage.setItem("visited","true");
//         localStorage.setItem("companyData",JSON.stringify({}));
//     };
//     return (
//         <IonPage>
//             <IonContent fullscreen>
//                 <IonHeader>
//                     <IonToolbar>
//                         <IonTitle>就活ノートへようこそ！</IonTitle>
//                     </IonToolbar>
//                 </IonHeader>
//                 <IonButton routerLink="./tab1" onClick={()=>{setSubmitObjective()}}>
//                     就活ノートを始める
//                 </IonButton>
//             </IonContent>
//         </IonPage>
//     );
// };

// export default SetObjectivePage;