import { Component, ɵCompiler_compileModuleSync__POST_R3__ } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular Password Generator';
  includeLetters = false;
  includeNumbers = false;
  includeSymbols = false;
  passwordProperty = ""
  length = 0;
// the export class etc is equvalent to 
// constructor() {
//   this.password = ''
// }



  // function called anytime a user clicks on button
  onButtonClick() {
    //console.log('Button was clicked')
    //this.passwordProperty = "MY PASSWORD"

    const numbers = '1234567890'
    const letters = 'abcdefghijklmnopqrstuvwxyz'
    const symbols = '!@#$%^&*'
    let validChars = '';
    if (this.includeLetters) {
      validChars += letters;
    }
    if (this.includeNumbers) {
      validChars += numbers;
    }
    if (this.includeSymbols) {
      validChars += symbols;
    }

    let generatedPassword = '';
    for (let i = 0; i < this.length; i++) {
      const index = Math.floor(Math.random() * validChars.length)
      generatedPassword += validChars[index]
    }
    this.passwordProperty = generatedPassword;

  }

  // getPassword() {
  //   return this.passwordProperty
  // }

  onLettersClick() {
    this.includeLetters = !this.includeLetters
  }

  onNumbersClick() {
    this.includeNumbers = !this.includeNumbers
  }

  onSymbolsClick() {
    this.includeSymbols = !this.includeSymbols
  }

  onChangeLengthInput(value: string) {
    this.length = parseInt(value);

  }

  interpolationFunctionCall() {
    return 'value returned from app.component.ts interpolationFunctionCall()'
  }
}
