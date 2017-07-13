"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
console.info("CLI starter.");
function serve(port) {
    console.info("Serve on port " + port + ".");
}
require('yargs')
    .command('serve', "Start the server.", function (yargs) {
    yargs.option('port', {
        describe: "Port to bind on",
        default: "5000",
    }).option('verbose', {
        alias: 'v',
        default: false,
    });
}, function (args) {
    if (args.verbose) {
        console.info("Starting the server...");
    }
    serve(args.port);
}).argv;
//# sourceMappingURL=main.js.map