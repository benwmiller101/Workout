import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';


@Component({
  selector: 'app-exercise-modal',
  templateUrl: './exercise-modal.component.html',
  styleUrls: ['./exercise-modal.component.scss'],
  
})
export class ExerciseModalComponent implements OnInit {
  public exerciseList: any = "";
  exerciseName : any;
  selectedExercises: any;


  constructor(private http: HttpClient, private modalCtrl: ModalController) { }

  ngOnInit() {
    this.exerciseName = 123;
    this.http.get('https://wger.de/api/v2/exercise/').subscribe((response) => {console.log(response);this.exerciseList = response['results']});
  }

  dismissModal(name){
    this.modalCtrl.dismiss(name);
  }

  addExercise(exercise: any){
    this.dismissModal(exercise.name);
  }
}


