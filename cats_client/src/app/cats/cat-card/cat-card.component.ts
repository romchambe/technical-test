import { Component, Input, OnInit } from '@angular/core';
import { Cat } from '../cat.model';

@Component({
  selector: 'app-cat-card',
  standalone: true,
  imports: [],
  templateUrl: './cat-card.component.html',
  styleUrl: './cat-card.component.css'
})
export class CatCardComponent implements OnInit {
  @Input() cat!: Cat;

  constructor() { }

  ngOnInit(): void { }
}