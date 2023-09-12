const { clipboard } = require("@nut-tree/nut-js");

(async () => {
  console.log("Setting the content of the clipboard...");
  await clipboard.setContent(
    "Hello World, this is the content of the clipbord"
  );

  console.log("Getting the content of the clipboard in a variable...");
  const clipboardText = await clipboard.getContent();

  console.log("Current content of the clipboard is: ");
  console.log("\t", clipboardText);
})();
