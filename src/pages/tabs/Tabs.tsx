import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, 
    IonIcon, IonLabel, IonBadge,IonPage,IonRouterOutlet, IonApp } from '@ionic/react';
import { calendar, personCircle, map, informationCircle } from 'ionicons/icons';
import { Route } from 'react-router';
import ContactList from '../contactlist/ContactList';




const Tabs: React.FC = (props:any) => (
 
  <IonTabs>
     
  <IonRouterOutlet>
  <Route exact path='/user/view-contacts'  render={(props:any)=> <ContactList {...props}/>}  />   
  <Route exact path='/user/welcome' render={(props:any)=> <ContactList {...props}/>}  />    
  </IonRouterOutlet>

    <IonTabBar slot="bottom">

      <IonTabButton tab="tab1" href="/user/view-contacts">
        <IonIcon icon={calendar} />
        <IonLabel>Schedule</IonLabel>
        <IonBadge>6</IonBadge>
      </IonTabButton>

      <IonTabButton tab="tab2" href="/user/welcome">
        <IonIcon icon={personCircle} />
        <IonLabel>Speakers</IonLabel>
      </IonTabButton>

    </IonTabBar>
  </IonTabs>

);


export default Tabs;