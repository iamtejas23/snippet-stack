// CodeSnippetDemo.js
import React, { useState } from 'react';
import CopyToClipboard from 'react-copy-to-clipboard';
import './snippets.css';

const CodeSnippetDemo = () => {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="code-snippet-demo">
      <div className="code-container">
        <pre>
          <code>
            {`
              // Your code snippet here
              function greet() {
                console.log("Hello, world!");
              }
            `}
          </code>
        </pre>
      </div>

      <CopyToClipboard text={`function greet() {\n  console.log("Hello, world!");\n}`} onCopy={handleCopy}>
        <button>{copied ? 'Copied!' : 'Copy to Clipboard'}</button>
      </CopyToClipboard>
    </div>
  );
};

export default CodeSnippetDemo;
