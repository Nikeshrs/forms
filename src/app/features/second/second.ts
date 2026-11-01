import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Serv1 } from './serv1';
import { Router, RouterLink } from '@angular/router';

@Component({
  imports: [ReactiveFormsModule, JsonPipe, RouterLink],
  selector: 'app-second',
  styleUrl: './second.css',
  templateUrl: './second.html',
})
export class Second implements OnInit {
  group:FormGroup=new FormGroup({})
  constructor(private builder:FormBuilder,private ser:Serv1,private router:Router){}

  ngOnInit():void{
    this.group=this.builder.group({
      name:[''],
      address1:[''],
      address2:[''],
      city:[''],
      pincode:[''],
      state:[''],
      materials:[''],
      country:[''],
      Sand:[false],
      Bricks:[false],
      Rods:[false],
      Others:[false],
      comments:['']
    })
  }
  completed(){
    alert(this.ser.done())
  }
  url(){
    let a:number=100
    this.router.navigate(['/url',a])
  }

}
