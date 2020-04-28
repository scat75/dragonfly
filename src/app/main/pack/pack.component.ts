import { Component, Input, OnInit } from '@angular/core';
import { Queue } from '../../models/Queue.model';

@Component({
  selector: 'app-pack',
  templateUrl: './pack.component.html',
  styleUrls: ['./pack.component.scss']
})
export class PackComponent implements OnInit {

  @Input() description: string;
  @Input() queues: Queue[];

  constructor() { }

  ngOnInit(): void {
  }

}
