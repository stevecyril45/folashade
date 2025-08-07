import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

   activeModalId: string | null = null;

  openModal(modalId: string): void {
    this.activeModalId = modalId;
  }

  closeModal(): void {
    this.activeModalId = null;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
