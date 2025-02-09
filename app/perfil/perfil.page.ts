import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.page.html',
  styleUrls: ['./perfil.page.scss'],
  standalone:false
})
export class PerfilPage implements OnInit {

  gallery =[
    { name: 'Image 1', url: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
    { name: 'Image 2', url: 'https://ionicframework.com/docs/img/demos/avatar.svg' },
  ];

  constructor() { }

  ngOnInit() {
  }

}
