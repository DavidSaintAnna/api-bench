import React from 'react';
import SyntaxHighlighter from 'react-syntax-highlighter';

const Middlewares = () => <>
  <div className="title-card">
    <h1>Middlewares</h1>
    <p>
        Middlewares use an absolute file path to be loaded. The following
        characters will be used to expand short forms:
    </p>
  </div>
  <div className="content">
    <ul>
      <li>{'^abc -> /path/to/this/library/src/middlewares/abc.js'}</li>
      <li>{'$@some/lib/abc -> @some/lib/src/middlewares/abc.js'}</li>
      <li>{'#abc -> /path/to/root/src/middlewares/abc.js'}</li>
    </ul>
    <h2>Provided Middlewares</h2>
    <ul>
      <li>json and form encode</li>
      <li>access token handling</li>
      <li>csrf-header handling</li>
      <li>status 2xx check</li>
      <li>status 403 check</li>
      <li>status 404 check</li>
      <li>user-agent</li>
      <li>cookies</li>
    </ul>
    <h2>Custom Middleware</h2>
    <p>
        For custom middleware, implement the following interface. Prepare is
        called before sending a request, process after a request. If an error is
        thrown in process, any further validations are skipped.
    </p>
    <SyntaxHighlighter language="javascript">
      {`interface Middleware {
  process(response: Result): void;
  prepare(request: Request): Request;
}`}
    </SyntaxHighlighter>
  </div>
</>;
export default Middlewares;
