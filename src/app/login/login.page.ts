import { Component, AfterContentInit } from '@angular/core';  
import { Events } from '@ionic/angular';  
import { AmplifyService }  from 'aws-amplify-angular';  
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage { 

  authState: any;

  constructor(
    public events: Events,
    public amplifyService: AmplifyService,
    public router: Router
  ) {
    this.authState = { signedIn: false };

    this.amplifyService.authStateChange$
      .subscribe(authState => {
        this.authState.signedIn = authState.state === 'signedIn';
        this.events.publish('data:AuthState', this.authState);
      });
    }

    showDecks() {
      console.log("redirecting to decks");
      
      this.router.navigate(['/decks']);
    }
}