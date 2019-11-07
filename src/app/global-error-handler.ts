import { ErrorHandler, Injectable } from '@angular/core';  
  
@Injectable()
export class GlobalErrorHandler implements ErrorHandler {  
    constructor() {}  

    handleError(error) {  
       console.error('An error occurred:', error.message);  
       console.error(error);  
       alert('An error occurred: '+error.message);  
   }  
}
