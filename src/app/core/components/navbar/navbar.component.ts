import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  // State Variables
  collpaseSidebar: boolean = false;
  isSubMenu: any = "";

  constructor() { }

  ngOnInit(): void {
  }

  onOpenSubMenu = (name: any) => {
    this.isSubMenu = name;
  };

  onCollapseMenu = () => {
    this.collpaseSidebar = !this.collpaseSidebar;
    // this.menuClick.emit(this.collpaseSidebar);
  };
}
