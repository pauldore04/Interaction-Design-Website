import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-hot-or-cold',
  imports: [
    RouterLink,
    NgOptimizedImage
  ],
  templateUrl: './hot-or-cold.component.html',
  styleUrl: './hot-or-cold.component.css'
})
export class HotOrColdComponent {

}
