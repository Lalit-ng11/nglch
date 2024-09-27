import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,ProfileComponent,NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'myapp';
  user={name:'John Doe',age:21,email:"j@gmail.com"};
  ShowProfile =true;

  updateUser(){
    this.user={
      ...this.user,
      age:this.user.age + 1

    }
  }
  toggleProfile(){
    this.ShowProfile=!this.ShowProfile
  }
}
