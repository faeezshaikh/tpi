import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams } from '@ionic/angular';

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

  constructor(private activatedRoute: ActivatedRoute) { }
  
  ngOnInit() {
    console.log('Firstname: ', this.firstName);
    console.log('lastName: ', this.lastName);
    console.log('middleInitial: ', this.middleInitial);
   
  }

}
