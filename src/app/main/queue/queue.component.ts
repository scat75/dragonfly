import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-queue',
  templateUrl: './queue.component.html',
  styleUrls: ['./queue.component.scss']
})
export class QueueComponent implements OnInit {

  @Input() name: string;
  @Input() size: number;
  @Input() incoming: number;
  @Input() out: number;
  @Input() client: number;

  constructor() { }

  ngOnInit(): void {
  }

}
