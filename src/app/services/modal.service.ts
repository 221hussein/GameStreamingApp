import { Injectable } from '@angular/core';

interface IModal {
  id: string;
  visible: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  // private visible = false

  private modals : IModal[] = [];


  constructor() {}

  register(id: string) {
    this.modals.push({
      id,
      visible: false
    })
  }

  // we will call this method when the component is destroyed
  unregister(id: string) {
    this.modals = this.modals.filter(
      element => element.id !== id
    )
  }

   isModalOpen(id: string) : boolean {
    // solution 1
    // !! will return true if the value is not null or undefined
      // return !!this.modals.find(element => element.id === id)?.visible

      // solution 2
      return Boolean(this.modals.find(element => element.id === id)?.visible)
    }

    toggleModal(id : string) {
      const modal = this.modals.find(element => element.id === id)

      if (modal) {
        modal.visible = !modal.visible
      }
     // this.visible = !this.visible
    }


    
}
