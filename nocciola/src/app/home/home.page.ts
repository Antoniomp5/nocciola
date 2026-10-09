import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/angular';

import { TaskItemComponent } from '../components/task-item/task-item.component';

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
  imports: [
    CommonModule,
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    TaskItemComponent,
  ],
})
export class HomePage {
  listaDeTareas: Tarea[] = [
    { id: 1, titulo: 'Helado de Snikker', disponible: true },
    { id: 2, titulo: 'Helado de pistacho', disponible: false },
    { id: 3, titulo: 'Sorbete de mandarina', disponible: false },
  ];

  constructor() {}
}