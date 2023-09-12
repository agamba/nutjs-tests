const { mouse, left, right, up, down, sleep } = require("@nut-tree/nut-js");

(async () => {
  console.log(
    "Waiting for 2 seconds for the user to place the mouse in a position ..."
  );
  await sleep(2000);
  console.log("Starting mouse movement ...");
  await mouse.move(right(500));
  await mouse.move(down(500));
  await mouse.move(left(500));
  await mouse.move(up(500));
  console.log("Completed mouse movement.");
})();
