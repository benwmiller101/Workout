import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class NavparamService {
  navData:any;
  workouts: Array<{name: string}> = [];

  numOfExercises:any;

  constructor() {


   }

   setNavData(navObj){ //recive workout name from create page
    this.navData = navObj;
    this.workouts.push(this.navData);
    
   }

   getNavData(){ //return workoutname to be grabbed by workouts page.
     return this.workouts;
   }


   setNumOfExercises(num){  //recive number of exercises from create page
    this.numOfExercises = num;

   }

   getNumOfExercises(){ //return number of exercises to be grabbed by workouts page.
    return this.numOfExercises;
   }
}
