import { Component, Input, OnInit } from '@angular/core';
import { Tarea } from '../../interfaces/helados.model';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.scss'],
  standalone: true,
})
export class TaskItemComponent implements OnInit {
  @Input() tarea!: Tarea;

  constructor() {}

  ngOnInit() {}
}
