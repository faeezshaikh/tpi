import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardDetailsPage } from '../card-details/card-details.page';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.page.html',
  styleUrls: ['./decks.page.scss'],
})
export class DecksPage implements OnInit {
  decks = [{}];
  ngOnInit(): void {
    this.decks.push({id:1,name:"Deck 1"},{id:3,name:"Deck 3"})
    // throw new Error("Method not implemented.");
  }

  openDeck(deckId) {
    
  }

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
