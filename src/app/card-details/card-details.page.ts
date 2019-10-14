import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavParams, ModalController } from '@ionic/angular';
import Amplify, { API, graphqlOperation } from "aws-amplify";

const listComments = `
query listPosts($id:ID!) {
  listPosts(filter:{id: {eq: $id}} ) {
    items {
      comments {
        items {
          content
        }
      }
    }
  }
}
`;

@Component({
  selector: 'app-card-details',
  templateUrl: './card-details.page.html',
  styleUrls: ['./card-details.page.scss'],
})
export class CardDetailsPage implements OnInit {
  comments;
    // Data passed in by componentProps
    @Input() firstName: string;
    @Input() lastName: string;
    @Input() middleInitial: string;
    @Input() postId: string;

  constructor(private activatedRoute: ActivatedRoute,public modalController: ModalController) { }
  
  ngOnInit() {
    console.log('Firstname: ', this.firstName);
    console.log('lastName: ', this.lastName);
    console.log('middleInitial: ', this.middleInitial);
    // console.log('cardId: ', this.cardId);
   
    API.graphql(graphqlOperation(listComments, { id: this.postId }))
    .then(resp => {
      console.log("Comments:" ,resp.data.listPosts.items[0].comments.items);
      
      this.comments = resp.data.listPosts.items[0].comments.items;
    })
  }

  dismiss() {
 
    this.modalController.dismiss({
      'dismissed': true
    });
  }

}
