import { Component, OnInit } from '@angular/core';
import { Menutile } from 'src/app/Model/menutile.model';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  menu: Menutile[] = [
    new Menutile('Profile', 'profile', 'assets/images/profile.png'),
    new Menutile('Meetings', 'meetings', 'assets/images/meetings.png'),
    new Menutile('Chat', 'chat', 'assets/images/chat.png'),
    new Menutile('Settings', 'settings', 'assets/images/settings.png'),
    new Menutile('Help & Feedback', 'help', 'assets/images/help.png'),
  ];

  constructor() {}

  ngOnInit(): void {}
}
