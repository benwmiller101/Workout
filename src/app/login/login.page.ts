import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  email=""
  password=""
  error = false
  errorMsg = ""
  
  constructor(private storage: Storage, private router: Router) { }

  ngOnInit() {
  }

  login(){
    //Login code
    this.storage.get('user').then((user) => {console.log(user);
    
      if (user) {
        if(user.email == this.email && user.password == this.password){ // checks if the user details are correct

          this.email = ""
          this.password =""
          this.error = false;
          this.router.navigate(['/dashboard']) // if they are corrent navigate to profile page

        }
        else {
          this.email = ""
          this.password =""
          this.error = true;
          this.errorMsg = "Invalid email or password" // if they dont match display error message
        }
      } else {
        this.error = true;
        this.errorMsg = "No account found. Register first" // if no account, tell them to create account
      }
    
    })
    
  }
}
