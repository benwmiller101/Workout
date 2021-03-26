import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertController, PopoverController } from '@ionic/angular';
import { ProfilePopoverComponent } from '../profile-popover/profile-popover.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

  user={};

  constructor(public popoverController: PopoverController, 
  private storage: Storage, 
  private alertController: AlertController,
  private router: Router
  ) { }

  async popover(){
    const popover = await this.popoverController.create({
      component: ProfilePopoverComponent,
      event
    });
    return await popover.present();
  }


  ngOnInit() {
    this.storage.get('user').then(
      (obj) => {  console.log(obj);
        this.user= obj;}
    )
  }


  
  

  logout(){
    this.router.navigate(['/'])
  }
  
  async delete() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Delete Account?',
      message: 'Are you sure you want to delete your account? It will be lost <strong>forever</strong>.',
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('Confirm Cancel: blah');
          }
        }, {
          text: 'Yes',
          handler: () => {
            this.storage.set('user', null).then(
              (obj) => { this.router.navigate(['/'])}
            )
          }
        }
      ]
    });

    await alert.present();
  }
}
