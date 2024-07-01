import React, { useEffect } from 'react';

const InnocallsRTCComponent = () => {
  useEffect(() => {
    // Load external scripts
    const script = document.createElement('script');
    script.src =
      'https://innocalls-statics.s3.ap-south-1.amazonaws.com/webrtc/webrtc.js';
    script.type = 'module';
    script.onload = () => {
      if (window.InnocallsRTC) {
        // Initialize InnocallsRTC with configuration options
        const innocallsRTC = new window.InnocallsRTC({
          apiKey:
            '0.1718222664.1EEJShb1D96kXjOTToXqTjTZoTPldahVXqrUbsXMJYRMQdP6fq', // Your API key generated from Innocalls dashboard
          extension: '504', // Your extension number for login
          webrtcSecret: 'U2FsdGVkX19Zt40ZNPD9YxBEX0x8EPcfie946t6xScQ=', // WebRTC secret of your extension
          config: {
            baseColor: '#333', // Customize base color to match your amazing website
          },
        });
        // Mount Dialpad to specified html element
        innocallsRTC.mount('#calling-action'); // Mounts the Dialpad to the element with id="root"
        // Simulate button click after mounting
        window.onload = function () {
          document
            .querySelector(
              '#calling-action > div > div.flex.flex-row-reverse.items-end.gap-4 > div > div.flex.justify-end.gap-4.pt-4 > button'
            )
            .click();
        };
      } else {
        console.error('InnocallsRTC is not defined in the global scope');
      }
    };
    document.body.appendChild(script);

    // Load external CSS
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href =
      'https://innocalls-statics.s3.ap-south-1.amazonaws.com/webrtc/style.css';
    document.head.appendChild(link);

    // Cleanup on component unmount
    return () => {
      document.body.removeChild(script);
      document.head.removeChild(link);
    };
  }, []);

  return <div id="calling-action"></div>;
};

export default InnocallsRTCComponent;
