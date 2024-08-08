import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';
import { User } from '../../../auth/interfaces/user.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'heroes-layout-page',
  templateUrl: './layout-page.component.html',
  styleUrls: ['./layout-page.component.css']
})

export class LayoutPageComponent {
  
  public sidebarItems = [
    { label: 'Listado' , icon: 'label', url: './list'},
    { label: 'Añadir' , icon: 'add', url: './new-hero'},
    { label: 'Buscar' , icon: 'search', url: './search'},
  ]

  constructor( 
    private authService: AuthService,
    private router: Router 
  ) {}

  get user(): User| undefined { 
    return this.authService.curentUser;
  } 

  onLogout() {
    this.authService.logout()
    this.router.navigate(['/auth/login']);
  }

}