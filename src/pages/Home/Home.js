import React, { useEffect } from 'react';

const MyReactComponent = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.commoninja.com/sdk/latest/commonninja.js';
    script.defer = true;
    document.head.appendChild(script);

    return () => {
      document.head.removeChild(script);
    };
  }, []);

  return (
    <div className="commonninja_component pid-7a39dba6-398b-4532-a892-ef665b140f24">
      {/* Your content goes here */}
    </div>
  );
};

export default MyReactComponent;
