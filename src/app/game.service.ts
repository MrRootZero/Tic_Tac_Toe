import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  public board: any = [];
  boardSize: number = 9;
  activePlayer: string = 'X';
  turnCount: number = 0;
  isGameRunnning: boolean = false;
  isGameOver: boolean = false;
  winner: string | null = null;

  constructor() {
    this.newGame();
  }

  newGame() {
    this.activePlayer = 'X';
    this.turnCount = 0;
    this.isGameRunnning = false;
    this.isGameOver = false;
    this.winner = null;
    this.board = this.createBoard();
  }

  createBoard() {
    let board = [];
    for (let i = 0; i < 9; i++) {
      board.push({ id: i, state: null });
    }
    return board;
  }

  get getBoard() {
    return this.board;
  }

  set setBoard(board: any) {
    this.board = [...board];
  }

  changePlayerTurn(squareClicked: any) {
    this.updateBoard(squareClicked); // Update board state
    if (!this.isGameOver) {
      this.turnCount++;
      if (this.isWinner) {
        this.winner = this.activePlayer;
        this.isGameRunnning = false;
        this.isGameOver = true;
      } else {
        this.activePlayer = this.activePlayer === 'X' ? 'O' : 'X';
      }
    }
  }

  updateBoard(squareClicked: any) {
    this.board[squareClicked.id].state = this.activePlayer;
  }

  get gameOver(): boolean {
    return this.turnCount > 8 || this.winner !== null;
  }

  get isWinner(): boolean {
    return (
      this.checkDiag() || this.checkRows(this.board, 'row') || this.checkRows(this.board, 'col')
    );
  }

  checkRows(board: any, mode: any): boolean {
    const ROW = mode === 'row',
      DIST = ROW ? 1 : 3,
      INC = ROW ? 3 : 1,
      NUMTIMES = ROW ? 7 : 3;

    for (let i = 0; i < NUMTIMES; i += INC) {
      const firstSquare = board[i].state,
        secondSquare = board[i + DIST].state,
        thirdSquare = board[i + DIST * 2].state;

      if (firstSquare && secondSquare && thirdSquare) {
        if (firstSquare === secondSquare && secondSquare === thirdSquare) return true;
      }
    }
    return false;
  }

  checkDiag() {
    const timesRun = 2,
      midsquare = this.board[4].state;

    for (let i = 0; i <= timesRun; i += 2) {
      const upperCorner = this.board[i].state,
        lowerCorner = this.board[8 - i].state;

      if (midsquare && upperCorner && lowerCorner) {
        if (midsquare === upperCorner && upperCorner === lowerCorner) return true;
      }
    }
    return false;
  }
}
