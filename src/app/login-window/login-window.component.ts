import { Component } from '@angular/core';

@Component({
  selector: 'app-login-window',
  templateUrl: './login-window.component.html',
  styleUrls: ['./login-window.component.css']
})
export class LoginWindowComponent {
  

  title: string = "string Interpolation ==> Data Binding Example";
  person = {
    firstName: "Mohammed"
  };

  getName() : string {
    return "Kashif";
  }
  
title1:  string = "Property Binding Example";

clickme:boolean=true;  
 
  constructor(){
    setTimeout(() =>{
      this.clickme = false;
    }, 5000);
  }
 
  changeTitle(){
    this.title="Pat Cash"
    }
    


labelVal():string {

  return this.userValue+"/"+this.pwdValue+"..";
}

labelVal1():Date {

  return new Date();
}

userValue: string = "";
pwdValue: string ="";

submit():void{

console.log(this.userValue);
console.log(this.pwdValue);
  }


  title2 :  string = 'working on pipes-Great job';  
  todaydate = new Date();  
  jsonval = {name: 'Alex', age: '25', address:{a1: 'Paris', a2: 'France'}};  
  months = ['Jan', 'Feb', 'Mar', 'April', 'May', 'Jun', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec']; 
    
  
  isDisplayed : boolean = false;
  toggleDisplay(condition : boolean) : boolean {
    return this.isDisplayed = condition;
  }
  // toggleDisplay1() : any {
  //   this.isDisplayed = false;
  // }



  
  isUserLoggedIn: boolean = false;

  login() : any {
    this.isUserLoggedIn = true;
  }

  logout() : any {
    this.isUserLoggedIn = false;
  }


 show : boolean = true;

  items: string[] = ['Item 1', 'Item 2', 'Item 3'];
  books: string[] = ['a','aa','aaa']


  viewModel : string = "map";


  

}
