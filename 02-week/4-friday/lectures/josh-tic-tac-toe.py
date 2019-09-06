# Tic Tack Toe
# Play game until someone has won
# Switch between players

import data
import view


def check_if_i_won(current_player):
    for group in data.all_possible_combos:
        for combo in group:
            in_a_row = 0
            for space in combo:
                if space == current_player:
                    in_a_row += 1
            if in_a_row == 3:
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
            winner = current_player
        # current_player = switch_players(current_player)
        view.board(current_player)
    print(f'Player {winner} won!')


play_game()
