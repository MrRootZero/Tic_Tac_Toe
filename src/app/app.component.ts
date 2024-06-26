import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BoardComponent } from './board/board.component';
import { GameService } from './game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  imports: [RouterOutlet, BoardComponent, CommonModule],
})
export class AppComponent {
  title = 'Tic-Tac-Toe';
  constructor(public gameService: GameService) {}

  resetGame() {
    this.gameService.newGame();
  }
}
