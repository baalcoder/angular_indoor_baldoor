import { Component } from '@angular/core';
import { FirestoreService } from './services/firestore/firestore.service';

// declare const myTest: any;
// declare const $: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-indoor-baldoor';


  public pinRelays = [];
  constructor(
    private firestoreService: FirestoreService
  ) { }

  ngOnInit() {

    this.firestoreService.getRelayCollection().subscribe((snapshot) => {
      this.pinRelays = [];
      snapshot.forEach((doc: any) => {
        this.pinRelays.push({
          id: doc.payload.doc.id,
          data: doc.payload.doc.data()
        });
      })
    });
  }

  turnLED(isON) {



    this.pinRelays.forEach(relay => {

      if (relay.data.name == "LED") {
        relay.data.isON = isON;
        this.firestoreService.updateRelay(relay.id, relay.data).then(() => {
          console.log('Document has been updated succesfully');
          // myTest();
        }, (error) => {
          console.log(error);
        });
      }

    });
  }

  turnIRRIGATION(isON) {
    this.pinRelays.forEach(relay => {

      if (relay.data.name == "IRRIGATION") {
        relay.data.isON = isON;
        this.firestoreService.updateRelay(relay.id, relay.data).then(() => {
          console.log('Document has been updated succesfully');
        }, (error) => {
          console.log(error);
        });
      }

    });
  }


}

