import React,{useState,useEffect} from 'react';
import { IonContent, IonHeader, 
    IonPage, IonTitle,
     IonToolbar,IonInput, IonItem, IonLabel, 
     IonButton, IonText,IonAlert } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';






const AddContacts: React.FC<RouteComponentProps> = ({history}) => {

    

  return (
    <IonPage >
         
         <IonHeader>
        <IonToolbar>
        <IonTitle>Add New Contacts</IonTitle>
      </IonToolbar>
        </IonHeader>

      <IonText>HELLO THIS IS THE ADD CONTENTS PAGE</IonText>
    </IonPage>
  );
};

export default AddContacts;
