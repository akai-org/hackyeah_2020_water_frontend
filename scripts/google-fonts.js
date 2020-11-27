(async () => {
  const { fonts } = require("../config");
  const download = require("nextjs-google-fonts");
  await download(fonts);
})();
