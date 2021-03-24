import React,{useState,useEffect} from 'react';
import { IonContent, IonHeader, 
    IonPage, IonTitle,
     IonToolbar,IonInput, IonItem, IonLabel, 
     IonButton, IonText,IonAlert } from '@ionic/react';
import ContainerPropsInterface from '../../interfaces/ContainerPropsInterface'
import { RouteComponentProps } from 'react-router-dom';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;





const ContactList: React.FC<RouteComponentProps> = ({history}) => {

    

  return (
    <IonPage className="ion-padding">
      <IonText>HELLO THIS IS COOL CONTENT</IonText>
    </IonPage>
  );
};

export default ContactList;
