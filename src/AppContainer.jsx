import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';

export default function render(App) {
  ReactDOM.render(
    <Suspense fallback="Loading">
      <App />
    </Suspense>,
    document.getElementById('root')
  );
}