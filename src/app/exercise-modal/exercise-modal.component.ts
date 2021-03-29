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
    this.http.get('https://wger.de/api/v2/exercise/').subscribe((response) => {console.log(response);this.exerciseList = response['results']}); //get response from API
  }

  dismissModal(name){
    this.modalCtrl.dismiss(name);
  }

  addExercise(exercise: any){
    this.dismissModal(exercise.name);//dismisses the modal while passing through name of exercise clicked.
  }
}


