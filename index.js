const http = require("http");

const server = http.createServer((req, res) => {
  // Set up headers for SSE
  res.writeHead(200, {
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Access-Control-Allow-Origin": '*',
    Connection: "keep-alive",
  });

  // Send initial event to the client
  res.write("data: Initial event\n\n");

  // Simulate sending updates every 5 seconds
  const intervalId = setInterval(() => {
    res.write(`data: Update at ${new Date().toLocaleTimeString()}\n\n`);
  }, 5000);

  // Close the connection after 25 seconds
  setTimeout(() => {
    clearInterval(intervalId);
    res.end();
  }, 25000);
});

server.listen(8000, () => {
  console.log("Server listening on port 8000");
});
