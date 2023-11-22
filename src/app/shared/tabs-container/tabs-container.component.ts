import { Component,AfterContentInit, ContentChildren } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit{

  @ContentChildren(TabComponent) tabs =  {}

  constructor() { }

  ngAfterContentInit(): void {
    
  }

}
