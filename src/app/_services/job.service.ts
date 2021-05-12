import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class JobService {
createJobParameter = new BehaviorSubject<any>([]);
  constructor() { }
}
