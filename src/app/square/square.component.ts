import { Component, Input } from '@angular/core';
import { GameService } from '../game.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-square',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.css'],
})
export class SquareComponent {
  constructor(public gameService: GameService) {}

  @Input() square: any;

  changePlayer() {
    if (!this.gameService.isGameOver && this.square.state == null) {
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
    }
  }
}
