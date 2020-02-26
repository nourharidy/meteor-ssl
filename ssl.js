const isProduction = process.env.NODE_ENV !== "development";

SSL = function(key, cert, port) {
  if (isProduction) {
    return "This package is for development environments only!";
  } // exit function

  var httpProxy = Npm.require("http-proxy");

  const [, , host, targetPort] = Meteor.absoluteUrl().match(
    /([a-zA-Z]+):\/\/([\-\w\.]+)(?:\:(\d{0,5}))?/
  );

	if (!port) {
		port = 443
	}

  const proxy = httpProxy
    .createServer({
      target: {
        host,
        port: targetPort
      },
      ssl: {
        key,
        cert
      },
      ws: true,
      xfwd: true
    })
    .listen(port);

  proxy.on("error", function() {
    console.log("HTTP-PROXY NPM MODULE ERROR: " + err);
    return;
  });

  console.log('PROXY RUNNING ON', port);
};
