import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {

    // Data passed in by componentProps
    @Input() firstName: string;
    @Input() lastName: string;
    @Input() middleInitial: string;
    @Input() cardId: string;

  constructor(private activatedRoute: ActivatedRoute,public modalController: ModalController) { }
  
  ngOnInit() {
    console.log('Firstname: ', this.firstName);
    console.log('lastName: ', this.lastName);
    console.log('middleInitial: ', this.middleInitial);
    console.log('cardId: ', this.cardId);
   
  }

  dismiss() {
 
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
