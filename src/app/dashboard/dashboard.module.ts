import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  entryComponents:[ProfilePopoverComponent],
  declarations: [DashboardPage, ProfilePopoverComponent]
})
export class DashboardPageModule {}
