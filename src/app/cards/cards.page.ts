import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CardDetailsPage } from '../card-details/card-details.page';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  deckId;
  cards = [{}];
  constructor(private activatedRoute: ActivatedRoute,private modalController: ModalController) {
    this.cards.push({id:1,name:"Card 1"},{id:2,name:"Card 2"},{id:3,name:"Card 3"},{id:4,name:"Card 4"},{id:5,name:"Card 5"})
   }

  ngOnInit() {
    this.deckId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Deck id:",this.deckId);
    
  }

  async presentModal(cardId) {
    const modal = await this.modalController.create({
      component: CardDetailsPage,
      componentProps: {
        'firstName': 'Douglas',
        'lastName': 'Adams',
        'middleInitial': 'N',
        'cardId':cardId
      }
    });
    return await modal.present();
  }

}
