var http = require('http');

http.createServer(function(req, res) {
  res.end("hello do node");
  console.log(res);
}).listen(1234);

console.log("ouvindo em http://localhost:1234");

/*  console.log(res);

{ domain: null,
  _events: { finish: [Function] },
  _maxListeners: 10,
  output: [],
  outputEncodings: [],
  writable: true,
  _last: false,
  chunkedEncoding: true,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _headerSent: true,
  _header: 'HTTP/1.1 200 OK\r\nDate: Fri, 19 Sep 2014 03:05:54 GMT\r\nConnection
: keep-alive\r\nTransfer-Encoding: chunked\r\n\r\n',
  _hasBody: true,
  _trailer: '',
  finished: true,
  _hangupClose: false,
  socket: null,
  connection: null,
  statusCode: 200 }
{ domain: null,
  _events: { finish: [Function] },
  _maxListeners: 10,
  output: [],
  outputEncodings: [],
  writable: true,
  _last: false,
  chunkedEncoding: true,
  shouldKeepAlive: true,
  useChunkedEncodingByDefault: true,
  sendDate: true,
  _headerSent: true,
  _header: 'HTTP/1.1 200 OK\r\nDate: Fri, 19 Sep 2014 03:05:54 GMT\r\nConnection
: keep-alive\r\nTransfer-Encoding: chunked\r\n\r\n',
  _hasBody: true,
  _trailer: '',
  finished: true,
  _hangupClose: false,
  socket: null,
  connection: null,
  statusCode: 200 }


*/




/*   console.log(req); e ainda tem mais kkk

        allowHalfOpen: true,
        onend: [Function],
        destroyed: false,
        bytesRead: 0,
        _bytesDispatched: 0,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Circular],
        _idleStart: 1411095760788,
        parser: [Object],
        ondata: [Function],
        _paused: false },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
     _idleStart: 1411095760808,
     parser:
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
     ondata: [Function],
     _paused: false,
     _httpMessage: null },
  connection:
   { _connecting: false,
     _handle:
      { fd: null,
        writeQueueSize: 0,
        owner: [Circular],
        onread: [Function: onread],
        reading: true },
     _readableState:
      { highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: false,
        ended: false,
        endEmitted: false,
        reading: true,
        calledRead: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        objectMode: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        oldMode: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function],
        close: [Object] },
     _maxListeners: 10,
     _writableState:
      { highWaterMark: 16384,
        objectMode: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        buffer: [],
        errorEmitted: false },
     writable: true,
     allowHalfOpen: true,
     onend: [Function],
     destroyed: false,
     bytesRead: 688,
     _bytesDispatched: 262,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        _connections: 2,
        connections: [Getter/Setter],
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        allowHalfOpen: true,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _connectionKey: '4:0.0.0.0:1234' },
     _idleTimeout: 120000,
     _idleNext:
      { _connecting: false,
        _handle: [Object],
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _maxListeners: 10,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        onend: [Function],
        destroyed: false,
        bytesRead: 0,
        _bytesDispatched: 0,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Circular],
        _idleStart: 1411095760788,
        parser: [Object],
        ondata: [Function],
        _paused: false },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
     _idleStart: 1411095760808,
     parser:
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
     ondata: [Function],
     _paused: false,
     _httpMessage: null },
  httpVersion: '1.1',
  complete: false,
  headers:
   { host: 'localhost:1234',
     connection: 'keep-alive',
     accept: '',
     'user-agent': 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/537.36 (KHTM
L, like Gecko) Chrome/37.0.2062.120 Safari/537.36',
     'accept-encoding': 'gzip,deflate,sdch',
     'accept-language': 'pt-BR,pt;q=0.8,en-US;q=0.6,en;q=0.4' },
  trailers: {},
  _pendings: [],
  _pendingIndex: 0,
  url: '/favicon.ico',
  method: 'GET',
  statusCode: null,
  client:
   { _connecting: false,
     _handle:
      { fd: null,
        writeQueueSize: 0,
        owner: [Circular],
        onread: [Function: onread],
        reading: true },
     _readableState:
      { highWaterMark: 16384,
        buffer: [],
        length: 0,
        pipes: null,
        pipesCount: 0,
        flowing: false,
        ended: false,
        endEmitted: false,
        reading: true,
        calledRead: true,
        sync: false,
        needReadable: true,
        emittedReadable: false,
        readableListening: false,
        objectMode: false,
        defaultEncoding: 'utf8',
        ranOut: false,
        awaitDrain: 0,
        readingMore: false,
        oldMode: false,
        decoder: null,
        encoding: null },
     readable: true,
     domain: null,
     _events:
      { end: [Object],
        finish: [Function: onSocketFinish],
        _socketEnd: [Function: onSocketEnd],
        drain: [Object],
        timeout: [Function],
        error: [Function],
        close: [Object] },
     _maxListeners: 10,
     _writableState:
      { highWaterMark: 16384,
        objectMode: false,
        needDrain: false,
        ending: false,
        ended: false,
        finished: false,
        decodeStrings: false,
        defaultEncoding: 'utf8',
        length: 0,
        writing: false,
        sync: false,
        bufferProcessing: false,
        onwrite: [Function],
        writecb: null,
        writelen: 0,
        buffer: [],
        errorEmitted: false },
     writable: true,
     allowHalfOpen: true,
     onend: [Function],
     destroyed: false,
     bytesRead: 688,
     _bytesDispatched: 262,
     _pendingData: null,
     _pendingEncoding: '',
     server:
      { domain: null,
        _events: [Object],
        _maxListeners: 10,
        _connections: 2,
        connections: [Getter/Setter],
        _handle: [Object],
        _usingSlaves: false,
        _slaves: [],
        allowHalfOpen: true,
        httpAllowHalfOpen: false,
        timeout: 120000,
        _connectionKey: '4:0.0.0.0:1234' },
     _idleTimeout: 120000,
     _idleNext:
      { _connecting: false,
        _handle: [Object],
        _readableState: [Object],
        readable: true,
        domain: null,
        _events: [Object],
        _maxListeners: 10,
        _writableState: [Object],
        writable: true,
        allowHalfOpen: true,
        onend: [Function],
        destroyed: false,
        bytesRead: 0,
        _bytesDispatched: 0,
        _pendingData: null,
        _pendingEncoding: '',
        server: [Object],
        _idleTimeout: 120000,
        _idleNext: [Object],
        _idlePrev: [Circular],
        _idleStart: 1411095760788,
        parser: [Object],
        ondata: [Function],
        _paused: false },
     _idlePrev: { _idleNext: [Circular], _idlePrev: [Object] },
     _idleStart: 1411095760808,
     parser:
      { _headers: [],
        _url: '',
        onHeaders: [Function: parserOnHeaders],
        onHeadersComplete: [Function: parserOnHeadersComplete],
        onBody: [Function: parserOnBody],
        onMessageComplete: [Function: parserOnMessageComplete],
        socket: [Circular],
        incoming: null,
        maxHeaderPairs: 2000,
        onIncoming: [Function] },
     ondata: [Function],
     _paused: false,
     _httpMessage: null },
  _consuming: true,
  _dumped: true,
  httpVersionMajor: 1,
  httpVersionMinor: 1,
  upgrade: false,
  read: [Function] }


*/