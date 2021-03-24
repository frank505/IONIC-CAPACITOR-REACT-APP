import { Plugins } from '@capacitor/core';

const { Storage } = Plugins;


export const baseUrl:string = "http://localhost:8001/api";

const storageType:any = Storage;

export const getData =  async <T>(addedUrl:string, tokenId :string=''):Promise<T> => 
{
    const token:any = await storageType.get(tokenId);
    let requestOptions:any = getRequestOptions(token);
    return fetch(
      baseUrl + '/' + addedUrl,
      requestOptions,
    ).then((response) => response.json());
} 

export const getRequestOptions = async <T>(token:any):Promise<T> =>
{
    let requestOptions:any = {
      method: 'GET',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-type': 'application/json',
      },
    };

    return requestOptions;
  };

  export const postData = async <T>(item:any, addedUrl:string, 
    postType:any, tokenId:string = ''):Promise<T> =>
     {
    
        const token:any = await storageType.get(tokenId);

        const requestOptions:any = postRequestOptions(
          token,
          JSON.stringify(item) ,
          postType,
        );
      
        console.log(requestOptions);

        return fetch(
         baseUrl + '/' + addedUrl,
          requestOptions,
        ).then((response) => response.json());
  };

  
  export const postRequestOptions = (token:any,item:any,postType:any)=>
{
     let requestOptions:any = {
  method: postType,
  headers: {
    Authorization: 'Bearer '+token ,
    'Content-type': 'application/json',
    'Accept': 'application/json, text/plain, */*',
  },
  body: item
 }
    return requestOptions;
  };


export const  postRequestOptionsWithFormData = async <T>(token:any,
     item:any, postType:string):Promise<T> => {
    let requestOptions:any = {
      method: postType,
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-type': 'multipart/form-data',
        Accept: 'application/json',
      },

      body: item,
    };

    return requestOptions;
  };

  export const deleteRequestOptions = async <T>(token:any):Promise<T> => 
  {
    let requestOptions:any = {
      method: 'DELETE',
      headers: {
        Authorization: 'Bearer ' + token,
        'Content-type': 'application/json',
      },
    };

    return requestOptions;
  };


  export const deleteData = async <T>(addedUrl:string, tokenId:any = ''):Promise<T> => {
    const token:any = await storageType.get(tokenId);
    const requestOptions:any = deleteRequestOptions(token);

    return fetch(
      baseUrl + '/' + addedUrl,
      requestOptions,
    ).then((response) => response.json());
  };


  export const postDataWithFormData = async <T>(item:any, addedUrl:string, 
    postType:string, tokenId:string = ''):Promise<T> => {
    const token:any = await storageType.get(tokenId);

    const requestOptions:any = postRequestOptionsWithFormData(
      token,
      item,
      postType,
    );

    

    return fetch(
     baseUrl + '/' + addedUrl,
      requestOptions,
    ).then((response) => response.json());
  };