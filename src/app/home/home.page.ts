import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardDetailsPage } from '../card-details/card-details.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(public modalController: ModalController) {}
  async presentModal() {
    const modal = await this.modalController.create({
      component: CardDetailsPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N'
      }
    });
    return await modal.present();
  }
}
