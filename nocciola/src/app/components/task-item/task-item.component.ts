import { Component, Input, OnInit} from '@angular/core';
import type { Helado } from '../../models/helado.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: true,
})
export class TaskItemComponent implements OnInit {
  @Input() helado!: Helado;

  constructor() {}

  ngOnInit() {}
}

