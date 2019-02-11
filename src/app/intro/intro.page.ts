import { Component, OnInit } from '@angular/core';
import { NavController, NavParams } from '@ionic/angular';
import { TabsPage } from '../tabs/tabs.page';

@Component({
  selector: 'app-intro',
  templateUrl: './intro.page.html',
  styleUrls: ['./intro.page.scss'],
})
export class IntroPage implements OnInit {

 

  constructor( 
    public navCrtrl: NavController,
    public navParams: NavParams) {
     }

  ngOnInit() {
  }

  goToTabsPage(){
    
  }

}
