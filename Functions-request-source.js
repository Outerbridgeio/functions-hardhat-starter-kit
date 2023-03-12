// Arguments can be provided when a request is initated on-chain and used in the request source code as shown below
const message = args[0]

if (!secrets.sessionId) {
  throw Error("sessionId not set.")
}

// build HTTP request object
const outerbridgeRequest = Functions.makeHttpRequest({
  url: `https://app.outerbridge.io/api/v1/webhook/7ylldwflap7630p`,
  method: "POST",
  headers: { "CF-SESSION-ID": secrets.sessionId },
  data: {
    message: message,
  },
})

// Make the HTTP request
const outerbridgeResponse = await outerbridgeRequest

if (outerbridgeResponse.error) {
  throw new Error("Error")
}

console.log(`outerbridgeResponse Data: ${outerbridgeResponse.data}`)

const messagePosted = outerbridgeResponse.data[0].data

return Functions.encodeString(JSON.stringify(outerbridgeResponse.data))
