import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { CardDetailsPage } from '../card-details/card-details.page';
import { APIService } from '../api.service';
import Amplify, { API, graphqlOperation } from "aws-amplify";

const ListPosts = `
query listBlogs($id:ID!) {
  listBlogs(filter: {id: {eq: $id}}) {
    items {
  
      posts {
        items {
          id,
          title,
          comments {
            items {
              content
            }
          }
        }
      }
    }
  }
}
`;

@Component({
  selector: 'app-cards',
  templateUrl: './cards.page.html',
  styleUrls: ['./cards.page.scss'],
})
export class CardsPage implements OnInit {

  deckId;
  posts;

  constructor(private activatedRoute: ActivatedRoute,private modalController: ModalController, private apiService: APIService) {
  
   }

  ngOnInit() {
    this.deckId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log("Blog id:",this.deckId);
    API.graphql(graphqlOperation(ListPosts, { id: this.deckId }))
    .then(resp => {
      console.log("Posts:" ,resp.data.listBlogs.items[0].posts.items);
      
      this.posts = resp.data.listBlogs.items[0].posts.items;
    })
    
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
