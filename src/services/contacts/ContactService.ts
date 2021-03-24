import { baseUrl, getData, postData } from "../HttpService"

export const getContactsService = async <T>(token:any,perPage:any,page:any):Promise<T> =>
{
  const tokenUrl = await localStorage.getItem(token);
    const addedUrl:string = "user/contact/get-all/"+tokenUrl+"/"+perPage+"?page="+page;
  
return getData(addedUrl,token).then((data:any)=>{
  return data;
}).catch((error)=>{
  return error;

});

}


