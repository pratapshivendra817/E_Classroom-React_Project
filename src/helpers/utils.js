export function getFormBody(params) {
    let formBody = [];
  
    for (let property in params) {
      let encodedKey = encodeURIComponent(property); 
      let encodedValue = encodeURIComponent(params[property]); 
      formBody.push(encodedKey + '=' + encodedValue);
    }
    console.log('formurl', formBody.join('&'));
    return formBody.join('&'); 
  }
  export function getAuthTokenFromLocalStorage() {
    return localStorage.getItem('token');
  }
  
