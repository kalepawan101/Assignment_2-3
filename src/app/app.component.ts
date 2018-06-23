import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
            <h1>Marvellous Infosystem</h1>
            <input type="text" class="input-txt"/>
            `,
  styles: ['h1{text-align:center;}  .input-txt{background-color:blue;height:35px;width:30%;margin-left:35%;}']
})
export class AppComponent {
  title = 'Mrvellous Infosystem';
}
