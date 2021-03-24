export const EmailCheckRegex:RegExp = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;

export const PasswordCheckRegex:RegExp =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/i;

export const noErrorsCheck = (dataObject:any):boolean =>
{
  for (var objects in dataObject) {
    console.log(objects);
  
    if (dataObject[objects] != '') 
    {
      return false;
    }
  
}
return true;
}
