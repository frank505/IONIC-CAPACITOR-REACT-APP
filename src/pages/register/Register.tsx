import {useState,useEffect} from 'react';
import { IonContent, IonHeader, 
  IonPage, IonTitle,
   IonToolbar,IonInput, IonItem, IonLabel,
    IonButton, IonText,IonAlert } from '@ionic/react';
import './register.css';
import ContainerPropsInterface from '../../interfaces/ContainerPropsInterface'
import { RouteComponentProps,withRouter } from 'react-router-dom';
import { EmailCheckRegex,PasswordCheckRegex,noErrorsCheck } from '../../Utility/HelperFunc';



const Register: React.FC<RouteComponentProps> = ({history}) => 
{

  const [fields, setFields] = useState<any>({
    email: '',
    password: '',  
    firstname:'',
    lastname:''
  });
  const [showAlert, setShowAlert] = useState(false);

const [formValidatorProps,setFormValidatorProps] = useState<any>('');

  const goToLoginPage = ():any =>
  {
     history.push('/login');
  }

  const validation = ():any => {
    const errors:any = {};
    errors.firstname = fields.firstname=='' ? 'firstname cannot be empty':'';
    errors.lastname = fields.lastname == '' ? 'lastname cannot be empty':'';
    errors.email = !fields.email ? 'Email Field is Required' : '';
    errors.email = !EmailCheckRegex.test(fields.email)
      ? 'Invalid email address'
      : '';
    errors.password = fields.password == '' ? 'Password Field is Required' : '';
    errors.password = !PasswordCheckRegex.test(fields.password)? 'Password Field Must Have A Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character':'';
    setFormValidatorProps(errors);
    return errors;
  };

const registerUser = ():any =>
{

let err = validation();
  if(noErrorsCheck(err)==false)
  {
   return setShowAlert(true);
  }

  console.log(fields);
 
}

return (
  <IonPage className="ion-padding">
    <IonContent>
     

      <IonItem className="move-left-a-bit">
              <IonLabel     >
               <IonInput type="text" name="name" 
               value={fields.firstname}
               placeholder="Enter your firstname"
               onIonChange={(ev:any)=>setFields({...fields,firstname:ev.detail.value})}
               >
               </IonInput>
              </IonLabel>
          </IonItem>

          <div className="validator-error" data-testid="error-form-message-test-id">
        {formValidatorProps != '' ? formValidatorProps.firstname:''}</div> 

          <IonItem className="move-left-a-bit">
              <IonLabel   >
               <IonInput 
               type="text" name="name" required 
               placeholder="Enter your lastname"
               value={fields.lastname} 
               onIonChange={(ev:any)=>setFields({...fields,lastname:ev.detail.value})}
               >
               </IonInput>
              </IonLabel>
          </IonItem>
          <div className="validator-error" data-testid="error-form-message-test-id">
        {formValidatorProps != '' ? formValidatorProps.lastname:''}</div> 

          <IonItem className="move-left-a-bit">
              <IonLabel   >
               <IonInput type="email" name="email" 
               value={fields.email}
                placeholder="Enter a valid email"
                onIonChange={(ev:any)=>setFields({...fields,email:ev.detail.value})}>
               </IonInput>
              </IonLabel>
          </IonItem>
          <div className="validator-error" data-testid="error-form-message-test-id">
        {formValidatorProps != '' ? formValidatorProps.email:''}</div> 
          
      
          <IonItem className="move-left-a-bit">
              <IonLabel >
               <IonInput type="password" name="password"
               value={fields.password}
               placeholder="Password"
               onIonChange={(ev:any)=>setFields({...fields,password:ev.detail.value})}>

               </IonInput>
              </IonLabel>
          </IonItem>
          <div className="validator-error" data-testid="error-form-message-test-id">
        {formValidatorProps != '' ? formValidatorProps.password:''}</div> 

        
             <IonButton  color="primary" expand="full" style={{marginTop:'20px'}}
             onClick={registerUser}
             >
               Login
             </IonButton> 
      
        <IonLabel className="link-text" onClick={goToLoginPage}>
        <IonText className="custom-style" >Click Here to Login</IonText>
        </IonLabel>

         <IonAlert
          isOpen={showAlert}
          onDidDismiss={() => setShowAlert(false)}
          cssClass='my-custom-class'
          header={'Alert'}
          subHeader={'Authentication Error'}
          message={'One or more fields have not been entered correctly'}
          buttons={['OK']}
        />   
   
    </IonContent>
  </IonPage>
);
};

export default Register;
