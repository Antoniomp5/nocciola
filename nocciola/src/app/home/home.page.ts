import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonHeader, IonToolbar, IonTitle, IonContent, IonGrid, 
  IonRow, IonCol, IonButton, IonItem, IonFooter,
  IonRouterLink, IonButtons, IonIcon } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { moonOutline, settingsOutline, sunnyOutline } from 'ionicons/icons';


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
    IonButton,
    IonFooter,
    IonRouterLink,
    IonButtons, 
    IonIcon ],
})
export class HomePage {
    listaDeTareas: Tarea[] = [
    { id: 1, titulo: 'Helado de Snikker', disponible: true },
    { id: 2, titulo: 'Helado de Happy hippo', disponible: false },
    { id: 3, titulo: 'Sorbete de mandarina', disponible: false },
  ];

    constructor() {
      addIcons({ moonOutline, settingsOutline, sunnyOutline });
    }

    get modoOscuro(): boolean {
      if (document.body.classList.contains('dark')) {
        return true;
      }

      if (document.body.classList.contains('light')) {
        return false;
      }

      return window.matchMedia('(prefers-color-scheme: dark)').matches;
    }

    alternarTema(): void {
      const activarOscuro = !this.modoOscuro;
      document.body.classList.toggle('dark', activarOscuro);
      document.body.classList.toggle('light', !activarOscuro);
    }
}