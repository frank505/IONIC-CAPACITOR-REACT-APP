import React,{useState,useEffect} from 'react';
import { IonContent, IonHeader, 
    IonPage, IonTitle,
     IonToolbar,IonInput, IonItem, IonLabel, 
     IonButton, IonText,IonAlert } from '@ionic/react';
import './login.css';
import ContainerPropsInterface from '../../interfaces/ContainerPropsInterface'
import { RouteComponentProps,withRouter } from 'react-router-dom';
import { EmailCheckRegex,PasswordCheckRegex,noErrorsCheck } from '../../Utility/HelperFunc';
import { LoginService } from '../../services/Auth/AuthService';
import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;





const Login: React.FC<RouteComponentProps> = ({history}) => {

    const [fields, setFields] = useState<any>({
        email: '',
        password: '',  
      }); 
      const [showAlert, setShowAlert] = useState(false);

    const [formValidatorProps,setFormValidatorProps] = useState<any>('');

    const [errMessage,setErrMessage] = useState('');

    const [authSubHeader, setAuthSubHeader] = useState('');

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
        setAuthSubHeader('Authentication Error');
        setErrMessage('one or more fields were not entered properly.');
       return setShowAlert(true);
      }

      console.log(fields);
      
      

      LoginService(fields).then((data:any)=>{
        console.log(data);
    if(data.hasOwnProperty('error') && data.success==false)
    {
      Object.keys(data.error).map((keys, index) => 
      {
        if(typeof data.error == 'string')
        {
          setAuthSubHeader('Authentication Error');
          setErrMessage(data.error);
          setShowAlert(true);

        }else{
          setAuthSubHeader('Authentication Error');
          setErrMessage(data.error[keys][0]);
          setShowAlert(true);
          
        }
       
      });
    }else if(data.hasOwnProperty('success') && data.success==true)
    {
        //  Storage.set({
        //     key: 'user_login',
        //     value: data.token
        //   });
        localStorage.setItem('user_login',data.token);
          history.push('/user/view-contacts');
    }
      });

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
          subHeader={authSubHeader}
          message={errMessage}
          buttons={['OK']}
        />


      </IonContent>
    </IonPage>
  );
};

export default Login;
