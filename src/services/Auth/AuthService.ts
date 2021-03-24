import { baseUrl, postData } from "../HttpService"

export const RegisterService = async <T>(credentials:any):Promise<T> =>
{
    const addedUrl:string = "user/register";
  
return postData(credentials,addedUrl,'POST').then((data:any)=>{
  return data;
}).catch((error)=>{
  return error;

});

}

export const LoginService = async <T>(credentials:any):Promise<T> =>
{
    const addedUrl:string = "user/login";
  
return postData(credentials,addedUrl,'POST').then((data:any)=>{
  return data;
}).catch((error)=>{
  return error;

});

}
