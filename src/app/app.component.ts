import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // img = "https://w7.pngwing.com/pngs/791/922/png-transparent-react-javascript-library-redux-user-interface-tesseract-logo-symmetry-nodejs.png"
  inputValue = ''

  constructor() {
    // setTimeout ( () => {
    //   console.log('Timeout is over')
    //   this.img = 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/Angular_full_color_logo.svg/1200px-Angular_full_color_logo.svg.png'
    // }, 5000)
    // }
  }

  onInput(event: KeyboardEvent)
  {
    this.inputValue = (<HTMLInputElement>event.target).value
  }

  onBlur (str: string) {
    this.inputValue = str
  }

  onClick () {
    console.log("Click!")
  }

}
