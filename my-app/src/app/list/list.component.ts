import { Component, Output, EventEmitter } from '@angular/core';
import { TrainersService } from '../hero.service';
import {Observable} from 'rxjs/Rx';

@Component({
  selector: 'list-app',
  templateUrl: './list.component.html',
  styleUrls: ['../app.component.css'],
  providers: [TrainersService]
})
export class ListComponent {

  trainers: Array<any> = [];

  @Output() showdetail: EventEmitter<any> = new EventEmitter<any>();

  constructor(private listTrainer: TrainersService) {
  }

  ngOnInit() {
    this.listTrainer.getTrainers().subscribe(
            data => {
              // console.log(data);
              this.trainers = data.trainers || [];
            },
            err => {
              console.log('Can not get data', err.status, err.url)
            },
            () => console.log('Completed!')
          );
  }

  detail(id: number){
    this.showdetail.emit(id);
  }
}
