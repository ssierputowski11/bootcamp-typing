import { Component } from '@angular/core';
import { lorem } from 'faker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  randomText = lorem.sentence();
  inputText = '';

  onInputSetInputText(event: Event) {
    this.inputText = (event.target as HTMLInputElement).value;
  }

  getComparedClass(letter: string, inputLetter: string): string {
    if (!inputLetter) {
      return '';
    }

    if (letter === inputLetter) {
      return 'correct';
    }

    return 'incorrect';
  }
}
