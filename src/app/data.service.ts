import { Injectable } from '@angular/core';
import  * as responses from '../assets/response.json'

@Injectable({
  providedIn: 'root'
})
export class DataService {
  data = responses
  getData(){
    return this.data
  }
  constructor() { }
}
