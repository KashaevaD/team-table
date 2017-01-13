import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
public users = [
  {
    name: 'Dasha',
    surname: 'Kashaeva',
    avatar: 'http://s012.radikal.ru/i319/1701/f1/bc7f22ff0076.jpg'
  },
  {
    name: 'Alex',
    surname: 'Popov',
    avatar: 'http://s018.radikal.ru/i504/1701/cb/ab932695915c.jpg'
  },
  {
    name: 'Igor',
    surname: 'Mitropan',
    avatar: 'http://s016.radikal.ru/i334/1701/9e/11ed59c0afbf.jpg'
  },
  {
    name: 'Andrey',
    surname: 'Suprun',
    avatar: 'http://s020.radikal.ru/i715/1701/35/32a5fb2b5624.jpg'
  },
  {
    name: 'Evgen',
    surname: 'Krasnikov',
    avatar: 'http://s14.radikal.ru/i187/1701/6c/9b2e1fceb79e.jpg'
  }
];
 
  constructor() {
    
  }

  ngOnInit() {
  }
 

}
