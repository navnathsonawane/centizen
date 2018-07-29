import { Component } from '@angular/core';

@Component({
  selector: 'centizen',
  templateUrl: './centizen.component.html',
  styleUrls: ['./centizen.component.css']
})
export class CentizenComponent {
  title = 'Centizen';
  url = window.location.href;
}
