import { Component, OnInit , Input} from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrl: './input.component.css'
})
export class InputComponent implements OnInit {
  
  @Input() control : FormControl = new FormControl() ;
  // this is for input text 
  @Input() type = 'text';
  @Input() placeholder = '';
  
  
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

  
}
