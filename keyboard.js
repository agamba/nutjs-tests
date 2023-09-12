"use strict";

const {
  mouse,
  screen,
  singleWord,
  sleep,
  useConsoleLogger,
  ConsoleLogLevel,
  straightTo,
  centerOf,
  Button,
  getActiveWindow,
  Key,
  keyboard,
} = require("@nut-tree/nut-js");

(async () => {
  await keyboard.type(Key.LeftSuper, Key.Space);
  await keyboard.type("TextEdit");
  await keyboard.pressKey(Key.Return);
  await keyboard.releaseKey(Key.Return);
  await keyboard.type("This is an automated script triggered using Nut.Js");
  await keyboard.pressKey(Key.Return);
  await keyboard.releaseKey(Key.Return);
  await keyboard.type("This is an example of how to control the keyboard");
  await keyboard.type(Key.LeftSuper, Key.S);
})();
