import { Component,Input,OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy, SimpleChanges} from '@angular/core';
import { NgIf } from '@angular/common';


@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent implements OnChanges,OnInit,DoCheck,AfterContentInit,AfterContentChecked,AfterViewInit,AfterViewChecked,OnDestroy {

  // container to catch data from parent comp 
  @Input() user:{name:string,age:number,email:string} | null=null;

  constructor(){
    console.log(`1.Profile Component::- Instance is Created..!`);
    
  }
  ngOnChanges(changes: SimpleChanges) {
    console.log(`2.ngOnChanges::- Users data is changed..!`,changes);
    
  }
  ngOnInit() {
    console.log(`3.ngOnInit::- component is initialized..!`);
    
  }
  ngDoCheck() {
    console.log(`4.ngDoCheck::- Change Detection cycle is trigerred..!`);
    
  }
  ngAfterContentInit() {
    console.log(`5.ngAfterContentInit::- content is inserted into a component.!`);
    
  }
  ngAfterContentChecked() {
    console.log(`6.ngAfterContentChecked::- inserted content is checked..!`);
    
  }
  ngAfterViewInit() {
    console.log(`7.ngAfterViewInit::- components view and child view is initialized..!`);
    
  }
  ngAfterViewChecked() {
    console.log(`8.ngAfterViewChecked::- components view and child view is checked..!`);
    
  }
  ngOnDestroy() {
    console.log(`9.ngOnDestroy:: - component is about to distroy..!`);
    
  }
}
