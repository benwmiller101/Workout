import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, NavController, NavParams } from '@ionic/angular';
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
  workout: any[] = [];
  sets;
  reps;
  workoutNameValue;
  constructor(
    private router: Router ,
    private http: HttpClient, 
    private modalCtrl:ModalController,
    private navParamService: NavparamService
    ) { }

  ngOnInit() {
    this.http.get('https://wger.de/api/v2/exercise/').subscribe((response) => {console.log(response);this.exerciseList = response['results']});

  }
  async add(){
    const modal = await this.modalCtrl.create({
      component : ExerciseModalComponent
      
    });
     
    modal.onDidDismiss()

    .then((data) => {
      this.exerciseList = data.data;
      this.exercises.push(this.exerciseList);
      this.exerciseDetails.push({name:this.exerciseList,sets:this.sets,reps:this.reps})
  });
    await modal.present();
  }

  create(){
    //console.log(this.workoutNameValue); 
    this.workout.push(this.exerciseDetails);
    //console.log(this.workout);

    this.navParamService.setNavData(this.workoutNameValue);

    this.router.navigate(['./workouts'],{queryParams:this.exerciseDetails});
    //this.router.navigate(['./workouts'],{queryParams:this.workoutNameValue});
    this.exerciseDetails = [];
    this.exercises = [];
    this.modalCtrl.dismiss();
  }
  async close(){
    await this.modalCtrl.dismiss();
  }

  removeExercise(){
    this.exercises.splice(this.exerciseList, 1);
    this.exerciseDetails.splice(1,1);
   // console.log(this.exerciseDetails);
  }

}
