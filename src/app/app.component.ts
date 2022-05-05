import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'reusability';
  users =[{
    name:'sam',
    age:25,
    id:1
  },
  {
    name:'alex',
    age:26,
    id:2
  },
  {
    name:'elle',
    age:24,
    id:3
    },
    {
      name:'rachel',
      age:25,
      id:4
    }
]
}
