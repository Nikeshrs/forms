import { Component, numberAttribute } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  imports: [],
  selector: 'app-url',
  styleUrl: './url.css',
  templateUrl: './url.html',
})
export class Url {
  c:number=0;
  constructor(private takevalue:ActivatedRoute){}
  finalstep(){
    let b=this.takevalue.snapshot.paramMap.get('id')
     this.c=Number(b);
  }

  add(){
    this.c=this.c+100;
  }
}
