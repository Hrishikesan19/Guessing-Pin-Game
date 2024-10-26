Here's a `README.md` file for your "PIN Guessing Game" project:

---

# PIN Guessing Game

Welcome to the **PIN Guessing Game**! This is a React-based game where players attempt to guess a randomly generated PIN with distinct digits. As players progress, the difficulty level increases with each correct guess.

### Live Demo

Check out the live version of the game here: [PIN Guessing Game](https://guessing-pin-game.vercel.app/)

---

## Features

- **Random PIN Generation**: Each PIN is generated with unique digits.
- **Increasing Difficulty**: With each level, the number of digits in the PIN increases, making it more challenging.
- **Feedback System**: After each guess, players receive feedback on:
  - The number of correct digits present.
  - The number of correct digits in the correct position.
- **Level Progression**: Correct guesses allow players to progress to higher levels with longer PINs.

## Gameplay

1. **Starting the Game**: Players begin at **Level 1** with a 3-digit PIN to guess.
2. **Guessing the PIN**: The player enters a guess by filling in the input fields.
3. **Feedback on Guess**:
   - After each guess, feedback is given to indicate how many digits are present in the PIN and how many are in the correct position.
4. **Leveling Up**: When the player guesses the PIN correctly, they advance to the next level, and the PIN's length increases by one digit.
5. **Challenge**: Each level adds a new digit to the PIN, making it progressively harder.

## Code Walkthrough

### Key Functions and State Variables

- **React Hooks**:
  - `level`: Represents the current level in the game.
  - `pin`: Stores the randomly generated PIN.
  - `input`: Stores the player’s current guess.
  - `message`: Displays feedback to the player.
  - `numDigits`: Determines the length of the PIN based on the level.

- **generateRandomPin(n)**: Generates a random PIN with `n` distinct digits. Throws an error if `n` exceeds 10, as only 10 unique digits (0-9) are available.

- **handleInputChange(index, value)**: Handles changes in the input fields, updating the `input` array with the player’s guess.

- **checkGuess()**: Compares the player’s guess with the randomly generated PIN:
  - `count`: Total correct digits (present in the PIN).
  - `inPlace`: Correct digits that are in the correct position.
  - Provides feedback to the player and, if the guess is correct, advances the player to the next level.

### Components

- **Input Fields**: Dynamically generated based on `numDigits`, allowing players to input their guesses.
- **Submit Button**: Triggers the `checkGuess` function to verify the player’s guess.
- **Feedback Message**: Provides feedback based on the player’s input.

## Installation and Usage

To run the project locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/guesspin/pin-guessing-game
   cd pin-guessing-game
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm start
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the game in action.

---

## Technologies Used

- **React** for building the UI.
- **CSS** for styling.
- **JavaScript** for game logic.

---

## Future Enhancements

- **Hint System**: Add hints for players after a few incorrect attempts.
- **Score Tracking**: Track player scores or attempts to add more competitive elements.
- **Timer**: Include a timer to increase challenge at higher levels.

---

## Author

Created by Hrishikesan on 25/10/2024.

