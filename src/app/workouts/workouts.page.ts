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

  dataRecieved:any;
  workoutName: string;
  

  constructor(
    private navParamService:NavparamService,
    private modalCtrl: ModalController, 
    public activatedRoute:ActivatedRoute,
    ) { 

    this.activatedRoute.queryParams.subscribe((data)=>{
      this.dataRecieved = data;
    })

    this.workoutName = this.navParamService.getNavData();

  }

  ngOnInit() {
  }

  async createWorkout(){
    const modal = await this.modalCtrl.create({
      component: CreatePage
    })
    await modal.present();
    //this.router.navigate(['./create'])
  }

  workoutReceived(){
    //console.log(this.dataRecieved);
    console.log("workout name: " + this.workoutName);
  }
}
