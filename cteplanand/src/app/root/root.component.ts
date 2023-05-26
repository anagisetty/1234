import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `
    <div>
      <h2>Configuration of Github</h2>
      <div>
        {{error}}
      </div>
    </div>
  `,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Github Configuration';
  error = `'NoneType' object has no attribute 'replace'`;
}