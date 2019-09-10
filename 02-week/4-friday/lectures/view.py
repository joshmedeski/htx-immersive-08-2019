import data
import os


def clear_screen():
    # os.system("cls||clear")
    print('=================================')


def board(current_player):
    clear_screen()
    print(f"{data.board[0][0]} | {data.board[0][1]} | {data.board[0][2]}")
    print("---------")
    print(f"{data.board[1][0]} | {data.board[1][1]} | {data.board[1][2]}")
    print("---------")
    print(f"{data.board[2][0]} | {data.board[2][1]} | {data.board[2][2]}")
    print()
    print(f"Player {current_player}'s turn")
