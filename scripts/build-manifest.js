const fs = require("fs");
const { manifest:{name,options} } = require("../config");
fs.writeFileSync(`public/${name}`, JSON.stringify(options,null,2));
console.log(
  `> [Manifest] Successfully created ${name} in '/public/${name}'`
);