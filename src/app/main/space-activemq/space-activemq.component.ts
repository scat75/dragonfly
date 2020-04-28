import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivemqService } from '../../services/activemq.service';
import { Broker } from '../../models/Broker.model';

@Component({
  selector: 'app-space-activemq',
  templateUrl: './space-activemq.component.html',
  styleUrls: ['./space-activemq.component.scss']
})
export class SpaceActivemqComponent implements OnInit, OnDestroy {

  broker: Broker;
  brokerSubscription: Subscription;

  constructor(private activemqService: ActivemqService) { }

  ngOnInit(): void {
    this.brokerSubscription = this.activemqService.brokerSubject.subscribe(
      (broker: Broker) => {
        this.broker = broker;
      }
    );
    this.activemqService.emitBrokerSubject();

  }

  ngOnDestroy(): void {
    this.brokerSubscription.unsubscribe();
  }
}
