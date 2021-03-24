import { IonContent, IonHeader, 
    IonPage, IonTitle,
     IonToolbar,IonInput, IonItem, IonLabel, IonButton, IonText } from '@ionic/react';
import './login.css';
import ContainerPropsInterface from '../../interfaces/ContainerPropsInterface'
import { RouteComponentProps,withRouter } from 'react-router-dom';


const Login: React.FC<RouteComponentProps> = ({history}) => {

    const goToRegisterPage = ():any =>
    {
       history.push('/register');
    }

  return (
    <IonPage className="ion-padding">
      <IonContent>
        <form>
            <IonItem className="move-left-a-bit">
                <IonLabel position="floating"  >
                 <IonInput type="email" name="email" required placeholder="Enter a valid email">
                 </IonInput>
                </IonLabel>
            </IonItem>
        
            <IonItem className="move-left-a-bit">
                <IonLabel position="floating" >
                 <IonInput type="password" name="password" required placeholder="Password">

                 </IonInput>
                </IonLabel>
            </IonItem>


          
               <IonButton type="submit" color="primary" expand="full" style={{marginTop:'20px'}}>
                 Login
               </IonButton> 
        </form>
          <IonLabel className="link-text" onClick={goToRegisterPage}>
          <IonText className="custom-style" >Click Here to Register</IonText>
          </IonLabel>
        

      </IonContent>
    </IonPage>
  );
};

export default Login;
