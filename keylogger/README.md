# Keylogger

This project is a simple keylogger built with HTML, CSS, and JavaScript. It demonstrates basic event handling for keypresses (`keydown` and a duplicated `keydown` which should be `keyup`).

## Functionality

The keylogger has two main buttons:

*   **Start Logging Keypresses:**  Initiates the keylogging process.  When clicked, it listens for `keydown` and `keyup` events (note: it *currently* listens for `keydown` twice, which is likely a bug, and should be corrected).
*   **Stop Logging Keypresses:** Stops the keylogging process and clears the displayed log and state.

The application displays two main pieces of information:

*   **Log:** Shows the most recent keypress event, indicating whether the key was pressed "down" or "up", along with the key's name (e.g., "key a pressed down").
*   **State:** Displays the current state of the key – either "Key is down" or "Key is up".  This is directly tied to the `keydown` event; it *does not* correctly indicate when a key is released because the `handleUp` function is *also* attached to `keydown` instead of `keyup`.

## Files

*   **`index.html`:**  Contains the structure of the webpage, including buttons, display areas, and styling.
*   **`index.js`:**  Contains the JavaScript code that handles user interactions (button clicks) and keyboard events.
*   **`README.md`:** This file (you're reading it!).

## How to Use

1.  **Open `index.html` in a web browser.**  This will load the keylogger interface.
2.  **Click the "Start Logging Keypresses" button.** The button will become disabled, and the "Stop Logging Keypresses" button will be enabled.
3.  **Press any key on your keyboard.**  You will see the keypress events displayed in the "Log" and "State" areas.
4.  **Click the "Stop Logging Keypresses" button** to stop logging.  The log and state will be cleared, and the buttons will revert to their initial states.
