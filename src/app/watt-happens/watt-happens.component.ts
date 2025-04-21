import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-watt-happens',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './watt-happens.component.html',
  styleUrl: './watt-happens.component.css'
})
export class WattHappensComponent {

}
