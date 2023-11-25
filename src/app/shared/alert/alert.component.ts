import { Component, OnInit , Input} from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrl: './alert.component.css'
})
export class AlertComponent implements OnInit {
  @Input() color = 'blue';

  get bgColor() {
    return `bg-${this.color}-400`;
  }

  constructor() { } 

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
