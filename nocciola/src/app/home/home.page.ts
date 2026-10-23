import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, IonRow, IonCol, IonButton, IonItem, IonFooter } from '@ionic/angular';


export interface Tarea {
  id: number;
  titulo: string;
  disponible?: boolean;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonItem,
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonGrid,
    IonRow,
    IonCol,
    IonButton, IonFooter],
})
export class HomePage {
  listaDeTareas: Tarea[] = [
    { id: 1, titulo: 'Helado de Snikker', disponible: true },
    { id: 2, titulo: 'Helado de Happy hippo', disponible: false },
    { id: 3, titulo: 'Sorbete de mandarina', disponible: false },
  ];

  constructor() {}
}