import {Component, Input} from '@angular/core';
//import { CommonModule } from '@angular/common';
import { 
  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon  } from "@ionic/angular";

@Component({
  selector: 'app-producto-item',
  templateUrl: './producto-item.component.html',
  styleUrls: ['./producto-item.component.scss'],
  imports: [  IonCard, 
  IonCardHeader, 
  IonCardTitle, 
  IonCardSubtitle, 
  IonCardContent, 
  IonList, 
  IonItem, 
  IonLabel, 
  IonIcon   ],
})
export class ProductoItemComponent{

  @Input() elemento!: {
  sabor: 'Chocolate negro',
  tipo: 'Cubeta',
  precio: 3.00,
  topping: 'trozos de chocolate negro al 72%',
  disponible: true
};
  constructor() { }

  

}
