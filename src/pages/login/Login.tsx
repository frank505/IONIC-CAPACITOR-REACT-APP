import React,{useState,useEffect} from 'react';
import { IonContent, IonHeader, 
    IonPage, IonTitle,
     IonToolbar,IonInput, IonItem, IonLabel, 
     IonButton, IonText,IonAlert } from '@ionic/react';
import './login.css';
import ContainerPropsInterface from '../../interfaces/ContainerPropsInterface'
import { RouteComponentProps,withRouter } from 'react-router-dom';
import { EmailCheckRegex,PasswordCheckRegex,noErrorsCheck } from '../../Utility/HelperFunc';




const Login: React.FC<RouteComponentProps> = ({history}) => {

    const [fields, setFields] = useState<any>({
        email: '',
        password: '',  
      }); 
      const [showAlert, setShowAlert] = useState(false);

    const [formValidatorProps,setFormValidatorProps] = useState<any>('');

    const goToRegisterPage = ():any =>
    {
       history.push('/register');
    }

    const validation = ():any => {
        const errors:any = {};
        errors.email = !fields.email ? 'Email Field is Required' : '';
        errors.email = !EmailCheckRegex.test(fields.email)
          ? 'Invalid email address'
          : '';
        errors.password = fields.password == '' ? 'Password Field is Required' : '';
        errors.password = !PasswordCheckRegex.test(fields.password)? 'Password Field Must Have A Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character':'';
        setFormValidatorProps(errors);
        return errors;
      };
    
  const Login = ():any =>
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
                <IonLabel  >
                 <IonInput type="email" name="email" 
                 placeholder="Enter a valid email"
                 value={fields.email}
                 onIonChange={(ev:any)=>setFields({...fields,email:ev.detail.value})}
                 >
                 </IonInput>
                </IonLabel>
            </IonItem>
        
            <div className="validator-error" data-testid="error-form-message-test-id">
        {formValidatorProps != '' ? formValidatorProps.email:''} </div>

            <IonItem className="move-left-a-bit">
                <IonLabel  >
                 <IonInput type="password" name="password" 
                 placeholder="Password"
                 value={fields.password}
                 onIonChange={(ev:any)=>setFields({...fields,password:ev.detail.value})} >

                 </IonInput>
                </IonLabel>
            </IonItem>

            <div className="validator-error" data-testid="error-form-message-test-id">
        {formValidatorProps != '' ? formValidatorProps.password:''}</div> 
          
               <IonButton type="submit" color="primary" expand="full"
               onClick={Login}
               style={{marginTop:'20px'}}>
                 Login
               </IonButton> 
   
          <IonLabel className="link-text" onClick={goToRegisterPage}>
          <IonText className="custom-style" >Click Here to Register</IonText>
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

export default Login;
