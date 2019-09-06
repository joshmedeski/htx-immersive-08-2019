# Tic Tack Toe
# Play game until someone has won
# Switch between players

import data
import view


def check_if_i_won(current_player):
    rows = [[data.board[0][0], data.board[0][1], data.board[0][2]],
            [data.board[1][0], data.board[1][1], data.board[1][2]],
            [data.board[0][0], data.board[1][0], data.board[2][0]],
            [data.board[0][1], data.board[1][1], data.board[2][1]],
            [data.board[0][2], data.board[1][2], data.board[2][2]],
            [data.board[2][0], data.board[2][1], data.board[2][2]],
            [data.board[0][0], data.board[1][1], data.board[2][2]],
            [data.board[2][0], data.board[1][1], data.board[0][2]]]
    for row in rows:
        print('Cells')
        print(row[0])
        print(row[1])
        print(row[2])
        if row[0] == row[1] and row[1] == row[2]:
            return True
    return False


def place_position(position, current_player):
    x = data.positions[position][0]
    y = data.positions[position][1]
    data.board[x][y] = current_player


def take_turn(current_player):
    place_position(input('Choose your position[1-9]: '), current_player)


def switch_players(current_player):
    if current_player == 'X':
        return 'O'
    elif current_player == 'O':
        return 'X'


def play_game():
    current_player = 'X'  # changes from "X" to "O"
    view.board(current_player)
    winner = ''
    while winner == '':
        take_turn(current_player)
        if check_if_i_won(current_player):
            print('I won!')
            winner = current_player
        current_player = switch_players(current_player)
        print(winner)
        view.board(current_player)
    print(f'Player {winner} won!')


play_game()
