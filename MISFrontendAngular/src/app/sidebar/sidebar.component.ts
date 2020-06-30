import { Component, OnInit } from '@angular/core';

declare const $: any;
declare interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}
export const ROUTES: RouteInfo[] = [
    { path: '/dashboard', title: 'Home',  icon: 'pe-7s-graph', class: '' },
    { path: '/user', title: 'Pregled profila',  icon:'pe-7s-user', class: '' },
    { path: '/table', title: 'Predmeti',  icon:'pe-7s-note2', class: '' },
    { path: '/maps', title: '* Profesor *',  icon:'pe-7s-users', class: '' },
    { path: '/notifications', title: 'Obaveštenja',  icon:'pe-7s-bell', class: '' }
];

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html'
})
export class SidebarComponent implements OnInit {
  menuItems: any[];

  constructor() { }

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
  isMobileMenu() {
      if ($(window).width() > 991) {
          return false;
      }
      return true;
  };
}
