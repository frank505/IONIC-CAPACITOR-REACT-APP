import React from 'react';
import { IonTabs, IonTabBar, IonTabButton, 
    IonIcon, IonLabel, IonBadge,IonPage,IonRouterOutlet, IonApp } from '@ionic/react';
import { calendar, personCircle, map, informationCircle,addCircle } from 'ionicons/icons';
import { Route } from 'react-router';
import ContactList from '../contactlist';
import AddContacts from '../addcontacts';




const Tabs: React.FC = (props:any) => (
 
  <IonTabs>
     
  <IonRouterOutlet>
  <Route exact path='/user/view-contacts'  render={(props:any)=> <ContactList {...props}/>}  />   
  <Route exact path='/user/add-contacts' render={(props:any)=> <AddContacts {...props}/>}  />    
  </IonRouterOutlet>

    <IonTabBar slot="bottom">
  
    <IonTabButton tab="tab2" href="/user/view-contacts">
        <IonIcon icon={personCircle} />
        <IonLabel>View Contacts</IonLabel>
      </IonTabButton>


      <IonTabButton tab="tab1" href="/user/add-contacts">
        <IonIcon icon={addCircle} />
        <IonLabel>Add Contacts</IonLabel>
      </IonTabButton>

      

    </IonTabBar>
  </IonTabs>

);


export default Tabs;