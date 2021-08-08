import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(
    private firestore: AngularFirestore
  ) { }

  //Create pinRelay
  public createRelayCollection(data: { nombre: string, url: string }) {
    return this.firestore.collection('relayCollection').add(data);
  }
  //Read a pinRelay
  public getRelay(documentId: string) {
    return this.firestore.collection('relayCollection').doc(documentId).snapshotChanges();
  }
  //Get All pinRelays
  public getRelayCollection() {
    return this.firestore.collection('relayCollection').snapshotChanges();
  }
  //Update a pinRelay
  public updateRelay(documentId: string, data: any) {
    return this.firestore.collection('relayCollection').doc(documentId).set(data);
  }
}