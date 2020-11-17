import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
  useIonViewDidEnter,
  useIonViewWillEnter,
  useIonViewDidLeave,
  useIonViewWillLeave
  
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { list, create } from 'ionicons/icons';
import SetObjectiveModal from './components/SetObjectiveModal'
import Tab1 from './pages/company-list.jsx';
import Tab2 from './pages/company-registration';
import Tab3 from './pages/Tab3';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';
import { useState } from 'react';

const App = () => {
  const [objective, setObjective] = useState();
  useEffect(() => {localStorageLoading()},[]);
  {/*ここでuseIonViewWillEnterを使いたいんだけど、だめっぽい。なぜ？ */}
  function localStorageLoading(){
    if ('visited' in localStorage){
      console.log("visited in localStorage")
    }else{
      console.log("No item named visited");
    }
  }
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/tab1" render={()=>{
              return ('visited' in localStorage)
              ? <Route path="/tab1" component={Tab1} exact={true} />
              : <SetObjectiveModal setObj={setObjective}/>}} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true} />
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
};

export default App;
