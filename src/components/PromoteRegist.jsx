import React from 'react';
import { IonTabBar, IonTabButton, IonIcon, IonLabel } from '@ionic/react';
import { list, create } from 'ionicons/icons';
import { IonReactRouter } from '@ionic/react-router';
import { Redirect, Route } from 'react-router-dom';
import './PromoteRegist.css';

const PromoteRegist = () => {
  return (
    <div className="container">
      <p>右下から企業を登録してみましょう！</p>
    </div>
  );
};
export default PromoteRegist;