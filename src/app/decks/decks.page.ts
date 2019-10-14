import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardDetailsPage } from '../card-details/card-details.page';
import { APIService } from '../api.service';

@Component({
  selector: 'app-decks',
  templateUrl: './decks.page.html',
  styleUrls: ['./decks.page.scss'],
})
export class DecksPage implements OnInit {
  decks = [{}];
  blogs;
  ngOnInit(): void {
    this.decks.push({id:1,name:"Deck 1"},{id:3,name:"Deck 3"})
    // throw new Error("Method not implemented.");
  }

  openDeck(deckId) {

  }

  constructor(public modalController: ModalController,private apiService:APIService) {
    this.apiService.ListBlogs().then(resp => {
      console.log("Blogs:" ,resp.items);
      
      this.blogs = resp.items;
    });
  }


}
