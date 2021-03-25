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

   setNavData(navObj){
    this.navData = navObj;
    this.workouts.push(this.navData);
    
   }

   getNavData(){
     return this.workouts;
   }


   setNumOfExercises(num){
    this.numOfExercises = num;

   }

   getNumOfExercises(){
    return this.numOfExercises;
   }
}
