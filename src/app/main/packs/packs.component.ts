import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { ActivemqService } from '../../services/activemq.service';
import { AllPack } from '../../models/AllPack.model';

@Component({
  selector: 'app-packs',
  templateUrl: './packs.component.html',
  styleUrls: ['./packs.component.scss']
})
export class PacksComponent implements OnInit, OnDestroy {

  packsSubscription: Subscription;
  allpacks: AllPack = null;

  constructor(private activemqService: ActivemqService) { }

  ngOnInit(): void {
    this.packsSubscription = this.activemqService.allPackSubject.subscribe(
      (responseAllPack: AllPack) => {
        this.allpacks = responseAllPack;
      }
    );
    this.activemqService.emitQueuesSubject();
  }

  ngOnDestroy(): void {
    this.packsSubscription.unsubscribe();
  }

}
