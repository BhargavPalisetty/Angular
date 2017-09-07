import { Component } from '@angular/core';
import { DataService } from './data.service';
import { trigger, state, style, transition, animate, keyframes} from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [`
          h1{
          color : black;
          text-decoration : underline;
          }

          .blue-class{
          color : blue;
          font-size : 200%;
          }

          p{
            width:300px;
            color:#0000b3;
            background:#ccccff;
            margin: 10px auto;
            text-align: center;
            padding:20px;
            font-size:200%;
          }
     `],
    animations : [
        trigger('myAnimation',[
                state('small',style({
                  transform : 'scale(1)',
                })),
                state('large',style({
                  transform : 'scale(1.5)',
                })),
                transition('small<=>large',animate('600ms ease-in', keyframes([
                style({ opacity:0, transform: 'translateY(100px)', offset:0}),
                style({ opacity:1, transform: 'translateY(10px)', offset:0.6}),
                ]))),
        ]),
]

})
export class AppComponent {

  title = 'ANGULAR 4';
  title2 = 'AweSome';
  angularLogo = 'https://source.unsplash.com/7bwQXzbF6KE/800x500';
  buttonStatus = false;
  myEvent($event){
  console.log($event);
  }

  titleClasses = {
  'blue-class' : true
  }

  titleClasses2 = {
  'color' : 'brown',
  'font-size' : '500%'
  }

  constructor (private dataService:DataService){}

  someProperty:string = '';
    ngOnInit() {
     console.log(this.dataService.ItServices);
     this.someProperty = this.dataService.myfav();
   }

  state: string = 'small';
  animateMe(){
    this.state = (this.state === "small" ? "large":'small');
  }
}
