import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.page.html',
  styleUrls: ['./registration.page.scss'],
})
export class RegistrationPage implements OnInit {

  user = {}
  
  constructor(private storage: Storage, private router: Router) { 
  }

  ngOnInit() {
  }

  register(){
    console.log(this.user);

    this.storage.set('user', this.user).then(
      (obj) => {this.router.navigate(['/dashboard'])}

    );

  }

}
