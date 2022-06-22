 const yargs = require("yargs");
 const api = require('./controller/apiReq')
 yargs.command({
    command:"apiData",
    builder: {
        url: {
            type: String,
            demandOption: true
        }
    },
handler: function (argv) {
    api.getData(argv.url)
}
})
yargs.argv
