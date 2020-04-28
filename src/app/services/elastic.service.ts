import { Injectable } from '@angular/core';
import { Elastic } from '../models/elastic.model';

@Injectable({
  providedIn: 'root'
})
export class ElasticService {

  elastic: Elastic;

  constructor() {
    this.elastic = new Elastic;
    this.elastic.status = true;
  }

  getElastic() {
    return this.elastic;
  }
}
