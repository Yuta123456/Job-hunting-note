import React, { useEffect } from 'react';
import { Redirect, Route } from 'react-router-dom';
import { HashLink } from "react-router-hash-link"
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
import Detail from './pages/Detail'
import CompanyEdit from './pages/company-edit'
import companyDataList from './data/companydata'
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
  useEffect(() => {localStorageLoading()},[]);
  const [companyData, setCompanyData] = useState({});
  {/*ここでuseIonViewWillEnterを使いたいんだけど、だめっぽい。なぜ？ */}
  function localStorageLoading(){
    if ('visited' in localStorage){
      console.log("visited in localStorage");
      setCompanyData(JSON.parse(localStorage.getItem("companyData")));
    }else{
      console.log("No item named visited");
      localStorage.setItem("companyData", JSON.stringify(companyData));
    }
  }
    return (
      <IonApp>
        <IonReactRouter>
          <IonRouterOutlet>
            <Route path="/tab1" render={()=>{
              return ('visited' in localStorage)
              ? <Tab1 data={companyData} setCompanyData={setCompanyData}/>
              : <SetObjectiveModal/>}} exact={true} />
            {/*<Route path="/tab2" component={Tab2} exact={true}/>*/}
            <HashLink to = "/tab2#default" component = {Tab2} exact={true}/>
            <Route path="/detail/:name" component={Detail}/>
            <Route path="/edit/:name" component={CompanyEdit}/>
            {/*<HashLink to = "/edit/:name#default2" component = {CompanyEdit} exact={true}/>*/}
            <Route path="/" render={() => <Redirect to="/tab1" />} exact={true} />
          </IonRouterOutlet>
        </IonReactRouter>
      </IonApp>
    );
};
export default App;