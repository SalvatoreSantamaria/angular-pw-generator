import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Password Generator';

  passwordProperty = ""
// the export class etc is equvalent to 
// constructor() {
//   this.password = ''
// }



  // function called anytime a user clicks on button
  onButtonClick() {
    //console.log('Button was clicked')
    this.passwordProperty = "MY PASSWORD"
  }

  // getPassword() {
  //   return this.passwordProperty
  // }
}
