import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Serve } from '../serve';

@Component({
  imports: [ReactiveFormsModule,JsonPipe],
  selector: 'app-form',
  styleUrl: './form.css',
  templateUrl: './form.html',
})
export class Form implements OnInit {
  gro:FormGroup=new FormGroup({})
  constructor(private builder:FormBuilder,private ser:Serve){}
  ngOnInit():void{
    this.gro=this.builder.group({
      name:['NIKESH'],
      email:[''],
      phonenumber:['6381038163'],
      password:['2003'],
      dob:['2003-04-06'],
      gender:[''],
      language:[''],
      Tamil:[''],
      English:[''],
      Malayalam:[''],
      Kanada:[''],
    })

  }
  onSubmit(){
    alert(this.ser.header()+'\n\n'+JSON.stringify(this.gro.value,null,2)+'\n\n'+this.ser.footer())
    
  }
  
  
}

