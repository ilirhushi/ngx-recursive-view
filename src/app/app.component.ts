import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = ' Recursive View using Angular 5';

  public tree = [
    {
      title: 'Basketball',
      children: []
    },
    {
      title: 'Football',
      children: [
        {
          title: 'Liga BBVA',
          children: []
        },
        {
          title: 'Seria A',
          children: [
            {
              title: 'AC Milan',
              children: []
            },
            {
              title: 'Juventus',
              children: []
            },
            {
              title: 'Internazionale Milan',
              children: [
                {
                  title: 'Main Team',
                  children: []
                },
                {
                  title: 'Youth Team',
                  children: []
                },
              ]
            },
            {
              title: 'Roma',
              children: [
                {
                  title: 'Main Tema',
                  children: []
                },
              ]
            },
          ]
        },
        {
          title: 'Premier League',
          children: [
            {
              title: 'Chelsea',
              children: []
            },
            {
              title: 'Man United',
              children: []
            },
            {
              title: 'Man City',
              children: []
            },
          ]
        },
      ]
    },
  ];

}
