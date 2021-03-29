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

  //Create modal
  async add(){
    const modal = await this.modalCtrl.create({
      component : ExerciseModalComponent
    });
     
    modal.onDidDismiss()

    //Recieve data from modal and process it
    .then((data) => {
      this.exerciseList = data.data;
      this.exercises.push(this.exerciseList);
      this.exerciseDetails.push({name:this.exerciseList,sets:this.sets,reps:this.reps})
      this.numOfExercises = this.exercises.length;
  });
    await modal.present();
  }


  //Create workout
  create(){
    if(this.workoutNameValue != null){  //Check if a name has been entered, if not then display alert
      this.navParamService.setNavData(this.workoutNameValue); //send data to navparam service
      this.navParamService.setNumOfExercises(this.numOfExercises); //send data to navparam service
      this.router.navigate(['./workouts'],{queryParams:this.exerciseDetails}); //navigate back to workouts page
      console.log("Number of exercises: " + this.numOfExercises);
      this.numOfExercises = 0;  //set data to empty so that next workout created doesnt include previous data
      this.exerciseDetails = [];
      this.exercises = [];
      this.modalCtrl.dismiss();
    } else {
      this.presentAlert();
    }

  }
  async presentAlert(){ //preset alart that alerts user that they need to name their workout.
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

  removeExercise(){ //remove exercise from list
    this.exercises.splice(this.exerciseList, 1);
    this.exerciseDetails.splice(1,1);
  }

}
