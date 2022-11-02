import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  constructor(public navCtrl: NavController, private router: ActivatedRoute) {}

  npm: any;

  ngOnInit(): void{
    this.router.queryParams.subscribe((params:any) =>{
      console.log(params);
      this.npm = params.data;
    })
  }
}
