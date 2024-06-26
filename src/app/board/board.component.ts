import { Component } from '@angular/core';
import { SquareComponent } from '../square/square.component';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-board',
  standalone: true,
  templateUrl: './board.component.html',
  styleUrl: './board.component.css',
  imports: [SquareComponent, CommonModule],
})
export class BoardComponent {
  constructor(public gameService: GameService) {}
}
