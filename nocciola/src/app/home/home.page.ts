import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import type { Helado } from '../models/helado.model';

import {
  IonHeader, IonToolbar, IonTitle, IonContent, IonGrid,
  IonRow, IonCol, IonButton, IonItem, IonFooter,
  IonButtons, IonIcon, IonInput
} from '@ionic/angular';
import { addIcons } from 'ionicons';
import { moonOutline, settingsOutline, sunnyOutline } from 'ionicons/icons';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [FormsModule, IonInput, IonItem,
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
    RouterLink,
    IonButtons,
    IonIcon],
})
export class HomePage {
  listaDeHelados: Helado[] = [
    { id: 1, titulo: 'Helado de Snikker', disponible: true, alergenos: ['Lacteos', 'Frutos secos', 'Chocolate'], tipo: 'leche', cantidad: 2, precio: 15.50 },
    { id: 2, titulo: 'Helado de Happy hippo', disponible: false, alergenos: ['lacteos', 'frutos secos', 'Chocolate'], tipo: 'leche', cantidad: 4, precio: 15.50 },
    { id: 3, titulo: 'Sorbete de mandarina', disponible: false, alergenos: ['ninguno'], tipo: 'agua', cantidad: 2, precio: 15.50 },
    { id: 4, titulo: 'Helado de pistacho', disponible: true, alergenos: ['Lácteos', 'Frutos secos'], tipo: 'leche', cantidad: 3, precio: 16.50 },
    { id: 5, titulo: 'Helado de chocolate blanco', disponible: true, alergenos: ['Lácteos', 'Soja'], tipo: 'leche', cantidad: 5, precio: 15.50 },
    { id: 6, titulo: 'Sorbete de limón', disponible: true, alergenos: [], tipo: 'agua', cantidad: 4, precio: 12.50 },
  ];

  public nuevoHelado: Helado = {
    id: 0, // Daremos un ID real al añadirla
    titulo: "", // Enlazaremos esto al input
    disponible: false, // Valor por defecto
    alergenos: [],
    tipo: "",
    cantidad: 0,
    precio: 0
  };

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
  agregarHelado(): void {
    if (this.nuevoHelado.titulo.trim().length === 0) {
      return;
    }

    const heladoParaAnadir: Helado = {
      ...this.nuevoHelado,
      id: Date.now()
    };

    this.listaDeHelados.unshift(heladoParaAnadir);

    this.nuevoHelado = {
      id: 0,
      titulo: "",
      disponible: false,
      alergenos: [],
      tipo: "",
      cantidad: 0,
      precio: 0
    };
  }
}