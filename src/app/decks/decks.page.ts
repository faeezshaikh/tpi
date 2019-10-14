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
  blogs;
  ngOnInit(): void {
 
  }
  constructor(public modalController: ModalController,private apiService:APIService) {
    this.apiService.ListBlogs().then(resp => {
      console.log("Blogs:" ,resp.items);
      
      this.blogs = resp.items;
    });
  }


}
