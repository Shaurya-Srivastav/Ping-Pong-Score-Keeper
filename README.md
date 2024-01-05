# Score Keeper - README.md

## Overview
Score Keeper is a simple, web-based application designed to keep track of scores in a game of ping pong. It provides an intuitive interface for incrementing scores for two players, with options to set the winning score and reset the game. The application uses HTML, JavaScript, and Bulma CSS framework for styling.

## Features
- **Score Tracking**: Dynamically update scores for two players.
- **Winning Score Selection**: Choose a custom winning score before the start of the game.
- **Game Over Logic**: Automatically disables score buttons and highlights the winner and loser when a player reaches the winning score.
- **Reset Functionality**: Allows resetting the score and game settings to start a new game.

## Prerequisites
- A modern web browser with JavaScript enabled.
- Internet connection to load Bulma CSS from CDN (if not available, the app will have no styling).

## Installation
No installation is necessary. Clone or download the repository, and open `index.html` in a web browser.

## Usage
- **Incrementing Score**: Click on "+1 Player 1" or "+1 Player 2" to increase the score for Player 1 or Player 2, respectively.
- **Setting the Winning Score**: Select the desired winning score from the dropdown before starting the game.
- **Resetting the Game**: Click on "Reset" to clear the scores and start a new game.

## Technology Stack
- **HTML**: Structures the web page and its content.
- **JavaScript**: Provides interactivity, game logic, and DOM manipulation.
- **Bulma CSS**: A modern CSS framework used for styling the application.

## File Structure
- `index.html`: Contains the HTML structure and links to Bulma CSS and JavaScript file.
- `app.js`: Contains all the JavaScript logic for scorekeeping and game state management.

## Acknowledgments
- Bulma CSS for providing the CSS framework.

---

**Note**: As this project uses Bulma CSS from a CDN, ensure internet connectivity for proper styling. If offline access is required, consider downloading Bulma CSS and linking it locally.

---