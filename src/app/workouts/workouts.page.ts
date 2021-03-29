import { Component, OnInit } from '@angular/core';
import { CreatePage } from '../create/create.page';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { NavparamService } from '../navparam.service';

@Component({
  selector: 'app-workouts',
  templateUrl: './workouts.page.html',
  styleUrls: ['./workouts.page.scss'],
})
export class WorkoutsPage implements OnInit {
  dataRecieved: any;
  workoutName: string;
  workouts: any[] = [];
  numOfExercises: any;

  constructor(
    private navParamService: NavparamService,
    private modalCtrl: ModalController,
    public activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.queryParams.subscribe((data) => {
      this.dataRecieved = data; //get data from navparams service 
    });

    this.workouts = this.navParamService.getNavData();
    this.numOfExercises = this.navParamService.getNumOfExercises(); //get data from navparams service 
  }

  ngOnInit() {}

  async createWorkout() {
    const modal = await this.modalCtrl.create({
      component: CreatePage,
    });
    await modal.present();//present create page modal
  }

  removeWorkout(index) {//remove workout from list
    let i = this.workouts.indexOf(index);
    this.numOfExercises = 0;
    this.workouts.splice(i, 1);
  }
}
