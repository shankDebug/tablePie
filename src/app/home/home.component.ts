import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from '../service/config.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  public res : any;

  constructor( private configService: ConfigService) {}

  columns = ["UserId","username","name","phone","email","website"];
  index = ["id","username","name","phone","email","website"];

  ngOnInit() {
    this.configService.getConfig()
    .subscribe(data => {
      this.res = data
      console.log("---->",this.res);
    })
    // console.log(this.res);
    
  }

}
