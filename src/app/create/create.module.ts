import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CreatePageRoutingModule } from './create-routing.module';

import { CreatePage } from './create.page';
import { ExerciseModalComponent } from '../exercise-modal/exercise-modal.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CreatePageRoutingModule
  ],
  declarations: [CreatePage, ExerciseModalComponent],
  entryComponents: [ExerciseModalComponent] 
})
export class CreatePageModule {}
