import { Component,AfterContentInit, ContentChildren ,QueryList } from '@angular/core';
import { TabComponent } from '../tab/tab.component';

@Component({
  selector: 'app-tabs-container',
  templateUrl: './tabs-container.component.html',
  styleUrl: './tabs-container.component.css'
})
export class TabsContainerComponent implements AfterContentInit{
  // solution 1
  // @ContentChildren(TabComponent) tabs : QueryList<TabComponent> =  new QueryList<TabComponent>()

  // solution 2
  @ContentChildren(TabComponent) tabs? : QueryList<TabComponent> 

  constructor() { }

  ngAfterContentInit(): void {
   this.tabs.
  }

}
