import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import {
  IonApp,
  IonRouterOutlet,
  useIonViewWillEnter
} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import SetObjectiveModal from './components/SetObjectiveModal'
import Tab1 from './pages/company-list.jsx';
import Tab2 from './pages/company-registration';
import Detail from './pages/Detail'
import CompanyEdit from './pages/company-edit'

import { Plugins } from '@capacitor/core';
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
const App = () => {
  const { SplashScreen } = Plugins;
  useIonViewWillEnter(() => {
    SplashScreen.hide()
  })
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/tab1" render={()=>{
              return ('visited' in localStorage)
              ? <Tab1 data={localStorage.getItem("companyData")}/>
              : <SetObjectiveModal/>}} exact={true} />
            <Route path="/tab2" component={Tab2} exact={true}/>
            <Route path="/detail/:name" component={Detail}/>
            <Route path="/edit/:name" component={CompanyEdit}/>
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
};
export default App;