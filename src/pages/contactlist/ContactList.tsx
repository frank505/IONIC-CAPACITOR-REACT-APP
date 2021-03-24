import React,{useState,useEffect} from 'react';
import { IonContent, IonHeader, 
    IonPage, IonTitle,
     IonToolbar,IonInput, IonItem, IonLabel, 
     IonButton, IonText,IonAlert,IonInfiniteScroll,
     IonInfiniteScrollContent,IonSearchbar,IonList, IonAvatar, useIonViewWillEnter } from '@ionic/react';
import { RouteComponentProps } from 'react-router-dom';
import { Plugins } from '@capacitor/core';
import { getContactsService } from '../../services/contacts/ContactService';

const { Storage } = Plugins;





const ContactList: React.FC<RouteComponentProps> = ({history}) => {
 

const tokenId = "user_login";
const perPage = 15;
const [disableInfiniteScroll, setDisableInfiniteScroll] = useState<boolean>(false);

const [items,setItems] = useState<any>('');
const [page,setPage] = useState<number>(1);

const [searchText, setSearchText] = useState('')

useIonViewWillEnter(async ()=>{

    getContactsService(tokenId,perPage,page).then((data:any)=>{
        if(data.hasOwnProperty('success') && data.success==true)
        {
            let newPage = data.current_page + 1;
            setItems(data.data.data);
            setPage(newPage);

        }
    });

});

async function searchNext($event: CustomEvent<void>) {
    // await fetchData();

    getContactsService(tokenId,perPage,page).then((data:any)=>{
        if(data.hasOwnProperty('success') && data.success==true)
        {
            let newPage = data.current_page + 1;
    setItems((items:any) => [...items, ...data.data.data]);
            setPage(newPage);

            ($event.target as HTMLIonInfiniteScrollElement).complete();
        }
    });
   

  
  }
    



  return (
    <IonPage >
        <IonHeader>
        <IonToolbar>
        <IonTitle>View All Contacts</IonTitle>
      </IonToolbar>
        </IonHeader>
        
        
        <IonContent>

     <IonSearchbar value={searchText} 
     onIonChange={e => setSearchText(e.detail.value!)}></IonSearchbar>
    

    <IonList>

        { 
        items=='' || items==null?
         null
        :
            items.map((item:any,index:number)=>
            {
             return (
                <IonItem key={index}>
                <IonAvatar slot="start">
                <img src="https://gravatar.com/avatar/dba6bae8c566f9d4041fb9cd9ada7741?d=identicon&f=y"/>
                </IonAvatar>
              <IonLabel>{`${item.firstname} ${item.lastname}`}</IonLabel>
            </IonItem>
             )   
            })
        }
     
    
    </IonList>


    <IonInfiniteScroll threshold="100px" disabled={disableInfiniteScroll}
                             onIonInfinite={(e: CustomEvent<void>) => searchNext(e)}>
            <IonInfiniteScrollContent
                loadingText="Loading more good contacts...">
            </IonInfiniteScrollContent>
          </IonInfiniteScroll>

        </IonContent>

    </IonPage>
  );
};

export default ContactList;
