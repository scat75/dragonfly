import { Injectable } from '@angular/core';
import { Broker } from '../models/Broker.model';
import { AllPack } from '../models/AllPack.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class ActivemqService {

  headers = new HttpHeaders({'Access-Control-Allow-Origin' : '*' , 'mon-entete-personnalise' : 'dragonfly'}); // TODO : à gérer
  brokerSubject = new Subject<Broker>();
  allPackSubject = new Subject<AllPack>();

  private broker: Broker;
  private allpacks: AllPack;

  constructor(private httpClient: HttpClient) {
    this.broker = new Broker();
    this.getBroker();
    this.getQueues();
  }

  emitBrokerSubject() {
    this.brokerSubject.next(this.broker);
  }

  emitQueuesSubject() {
    this.allPackSubject.next(this.allpacks);
  }

  getBroker() {
    this.httpClient
      .get<Broker>('http://localhost:8080/broker')
      .subscribe(
        (response) => {
          this.broker = response;
          if (response) {
            this.broker.status = true;
          } else {
            this.broker.status = false;
          }
          this.emitBrokerSubject();
        },
        (error) => {
          console.log('Erreur : ' + error);
          this.broker.status = false;
          this.emitBrokerSubject();
        }
      );
  }

  getQueues() {
    this.httpClient
      .get<AllPack>('http://localhost:8080/queues')
      .subscribe(
        (response) => {
          this.allpacks = response;
          this.emitQueuesSubject();
        },
        (error) => {
          console.log('Erreur : ' + error);
        }
      );
  }
}
