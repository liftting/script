function route(handle,pathname,response,postData) {
  console.log("About to route a request for " + pathname);

  var result;

  if (typeof handle[pathname] === 'function') {
   handle[pathname](response,postData);
  } else {
   console.log("No request handler found for " + pathname);
   result = "404 not found";

   response.writeHead(200, {"Content-Type": "text/plain"});
   response.write(result);
   response.end();

  }



}

exports.route = route;
