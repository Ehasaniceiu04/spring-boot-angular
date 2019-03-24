import { Component, OnInit } from '@angular/core';
import {FormGroup,FormControl,Validators} from '@angular/forms';
import { BikeService } from 'src/app/services/bike.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  models:string[]=[
    "Globo MTB 29 Full suspension",
    "Globo Carbon Fiber race series",
    "Globo Time Trial Blade"
  ]
  bikeFrom:FormGroup;
  validMessage:string='';
  constructor(private bikeService:BikeService) {
    this.bikeFrom=new FormGroup({
      name:new FormControl('',Validators.required),
      email:new FormControl('',Validators.required),
      phone:new FormControl('',Validators.required),
      model:new FormControl('',Validators.required),
      serialNumber:new FormControl('',Validators.required),
      purchasePrice:new FormControl('',Validators.required),
      purchaseDate:new FormControl('',Validators.required),
      contact:new FormControl()
    })
   }

  ngOnInit() {
   
  }

  submitRegistration()
  {
    if(this.bikeFrom.valid){
      this.validMessage='Your bike registration has been submitted. Thank you!';
      this.bikeService.createBikeRegistration(this.bikeFrom.value).subscribe(
        data=>{this.bikeFrom.reset();
          return true;
        },
        err=>{return Observable.throw(err);}
      )
    }
    else{
      this.validMessage='Please fill up the form before submitting';
    }
  }

}
