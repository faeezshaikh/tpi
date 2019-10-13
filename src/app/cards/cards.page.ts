import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  deckId;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.deckId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Deck id:",this.deckId);
    
  }

}
