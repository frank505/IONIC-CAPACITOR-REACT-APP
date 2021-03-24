import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { RouteComponentProps, withRouter } from 'react-router-dom';
import ContainerPropsInterface from '../../interfaces/ContainerPropsInterface';
import './register.css';

const Register: React.FC<RouteComponentProps> = ({history}) => {

  return (
    <IonPage>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Register Screen</IonTitle>
          </IonToolbar>
        </IonHeader>
      </IonContent>
    </IonPage>
  );
};

export default Register;
