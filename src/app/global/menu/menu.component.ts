import { Component, OnInit } from '@angular/core';
import { Menutile } from 'src/app/Model/menutile.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu: Menutile[] = [
    new Menutile('Profile', 'profile'),
    new Menutile('Meetings', 'meetings'),
    new Menutile('Chat', 'chat'),
    new Menutile('Settings', 'settings'),
    new Menutile('Help & Feedback', 'help'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
