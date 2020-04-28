import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Broker } from '../../models/Broker.model';
import { ActivemqService } from '../../services/activemq.service';
import { ElasticService } from '../../services/elastic.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.scss']
})
export class HealthComponent implements OnInit, OnDestroy {

  broker: Broker;
  brokerSubscription: Subscription;
  activemqStatus: boolean;
  elasticStatus: boolean;

  constructor(private activemqService: ActivemqService,
              private elasticService: ElasticService) { }

  ngOnInit(): void {
    this.brokerSubscription = this.activemqService.brokerSubject.subscribe(
      (broker: Broker) => {
        this.broker = broker;
      }
    );
    this.activemqService.emitBrokerSubject();
    // this.activemqStatus = this.activemqService.getBroker().status;
    this.elasticStatus = this.elasticService.getElastic().status;
  }

  ngOnDestroy(): void {
    this.brokerSubscription.unsubscribe();
  }

}
