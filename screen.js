const {
  sleep,
  screen,
  Region,
  pixelWithColor,
  RGBA,
} = require("@nut-tree/nut-js");

(async () => {
  // wait for 1 second before start
  console.log("waiting for 1 second");
  await sleep(1000);

  // capture screen width and height
  const width = await screen.width();
  const height = await screen.height();

  // calculate size of half of screen width and height
  const halfWidth = width / 2;
  const halfHeight = height / 2;

  // override default parameters
  screen.config.highlightDurationMs = 4000;
  screen.config.highlightOpacity = 0.5;

  console.log(
    "starting screen hightlight for 4 seconds. Defined in 'screen.config.highlightDurationMs'"
  );
  // Highlight a particular region of the screen, example top right of the screen
  await screen.highlight(new Region(halfWidth, 0, halfWidth, halfHeight));

  const screenshotFileName = "screenshot.png";
  console.log("Taking screenshot ...");
  // save a screen capture in a PNG file
  await screen.capture(screenshotFileName);
  console.log("Screenshot saved in file: ", screenshotFileName);

  // const pixelPosition = await screen.find(
  //   pixelWithColor(new RGBA(255, 0, 0, 255))
  // );
})();
