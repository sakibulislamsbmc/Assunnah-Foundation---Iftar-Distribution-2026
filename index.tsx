import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error("Could not find root element to mount to");
}

try {
  const root = ReactDOM.createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  console.error("Critical rendering error:", error);
  rootElement.innerHTML = `
    <div style="display: flex; align-items: center; justify-center; min-height: 100vh; background: #064d3b; color: white; padding: 20px; font-family: sans-serif;">
      <div style="text-align: center; width: 100%;">
        <h1 style="font-size: 2rem;">Application Error</h1>
        <p>Something went wrong while starting the application.</p>
        <pre style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 10px; text-align: left; display: inline-block; margin-top: 20px; max-width: 90%; overflow: auto;">${error instanceof Error ? error.message : String(error)}</pre>
      </div>
    </div>
  `;
}
