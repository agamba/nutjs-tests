# nutjs-tests

This repository includes various tests exploring how to communicate from nodeJS with other applications. It includes examples for controlling **keyboad, mouse, Clipboard and screen capture** using the module **[@nut-tree/nut-js](https://www.npmjs.com/package/@nut-tree/nut-js)**

# Installation

- Clone the repository
- **npm install**
- run each test using the following:
  - **node screen.js**
  - **node keyboard.js**
  - **node mouse.js**
  - **node clipboard.js**

# Scripts

## screen.js

Actions performed:

1. Showcases the use of **sleep** function
2. Highlights a region of the screen for a given time and opacity using the method **screen.highlight**

## keyboard.js

Showcases the use of the following methods: **keyboard.type**, **keyboard.pressKey**, **keyboard.releaseKey**,

Actions performed:

1. Trigers the opening of 'Spotlight Search' in MacOS simulating the pressing CMD + SPACE keys
2. Types the text 'TextEdit' in 'Spotlight Search'
3. Presses and releases the ENTER key, which opens 'TextEdit' app on MacOS
4. Once 'TextEdit' is opened, types some sample text into the editor
5. Finally, triggers the save function in 'TextEdit' by pressing CMD + S keys
6. Script stops

## mouse.js

Showcases the control of users' mouse. Takes control of the user's mouse and moves to fixed positions starting the the current position.

Actions performed:

1. Waits for 2 seconds
2. Move mouse 500 px - right
3. Move mouse 500 px - down
4. Move mouse 500 px - left
5. Move mouse 500 px - up

## clipboard.js

Showcases the use of the clipboard functions **setContent** and **getContent**

Actions performed:

1. Sets the clipboard content to the text: "**Hello World, this is the content of the clipbord**"
2. runs the **getContent** function and displays the content in console.log()

3. Sets a sample text to the Clipboard
4. Get the text from Clipboard and prints the content in nodejs console.log()

# Conclusions

## Pros

- **@nut-tree/nut-js** is primarily an automation tool for nodejs. - It can control the users' mouse and keyboard, performing highlights on the screen and well as screen captures.
- There are paid features that include Optical Character Recognition (OCR) as well as image recognition of particular regions of the screen. This later features could be eventually usefull for scanning the content of user's screen.
- Can be usefull for automated testing

## Cons

- Not well documented
- Some features are not free, (e.g. on-screen OCR)
- Advanced features such as the detection of areas of the screen, using https://github.com/nut-tree/TemplateMatcher, is outdated and does't support latest versions of Electron and NodeJS
- It's not designed to be interactive with input from the user, but rather executing a list of automated tasks invovling the control of keyboard and mouse
