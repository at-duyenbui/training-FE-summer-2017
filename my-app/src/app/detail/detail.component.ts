import { Component, Input } from '@angular/core';
import { TrainersService } from '../hero.service';

@Component({
  selector: 'detail-member',
  templateUrl: './detail.component.html',
  styleUrls: ['../app.component.css'],
  providers: [TrainersService]
})
export class DetailComponent {

  @Input() id: number;

  eachtrainer: any;

  constructor(private listTrainer: TrainersService) {
  }

  ngOnChanges() {
    this.listTrainer.getTrainers().subscribe(
            data => {
              let trainers = data.trainers
              // this.eachtrainer = trainers.filter(trainer => trainer.id === this.id) ;
              for(let trainer of trainers){
                if(trainer.id === this.id){
                  this.eachtrainer = trainer;
                  break;
                }
              }
            },
            err => {
              console.log('Can not get data', err.status, err.url)
            },
            () => console.log('Completed!')
          );
  }
}
