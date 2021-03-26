import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController, NavController, NavParams } from '@ionic/angular';
import { ExerciseModalComponent } from '../exercise-modal/exercise-modal.component';
import { NavparamService } from '../navparam.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.page.html',
  styleUrls: ['./create.page.scss'],
})
export class CreatePage implements OnInit {
  exerciseList: any = "";
  exercises: any[] = [];
  exerciseDetails: Array<{name: string, sets: number, reps: number}> = [];
  numOfExercises;
  sets;
  reps;
  workoutNameValue;
 
  constructor(
    private router: Router ,
    private modalCtrl:ModalController,
    private navParamService: NavparamService,
    private alertController: AlertController
    ) { }

  ngOnInit() { }

  async add(){
    const modal = await this.modalCtrl.create({
      component : ExerciseModalComponent
    });
     
    modal.onDidDismiss()

    .then((data) => {
      this.exerciseList = data.data;
      this.exercises.push(this.exerciseList);
      this.exerciseDetails.push({name:this.exerciseList,sets:this.sets,reps:this.reps})
      this.numOfExercises = this.exercises.length;
  });
    await modal.present();
  }

  create(){
    if(this.workoutNameValue != null){
      this.navParamService.setNavData(this.workoutNameValue);
      this.navParamService.setNumOfExercises(this.numOfExercises);
      this.router.navigate(['./workouts'],{queryParams:this.exerciseDetails});
      console.log("Number of exercises: " + this.numOfExercises);
      this.numOfExercises = 0;
      this.exerciseDetails = [];
      this.exercises = [];
      this.modalCtrl.dismiss();
    } else {
      this.presentAlert();
    }

  }
  async presentAlert(){
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Cannot Create Workout',
      message: 'You need to name your workout first.',
      buttons: ['OK']
    });

    await alert.present();
  }
  async close(){
    await this.modalCtrl.dismiss();
  }

  removeExercise(){
    this.exercises.splice(this.exerciseList, 1);
    this.exerciseDetails.splice(1,1);
  }

}
