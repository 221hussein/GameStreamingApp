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
    // get all active tabs
    const activeTabs = this.tabs?.filter(
    tab => tab.active
   )
    // if there is no active tab set, activate the first
   if (!activeTabs || activeTabs.length === 0) {
    this.selectTab(this.tabs!.first)
   }
  }
  selectTab(tab: TabComponent) {
    //loop through all tabs
    this.tabs?.forEach(tab => {
      tab.active = false
    }) 

    tab.active = true
  }

  
}
