import React from 'react';
import { createRoot } from 'react-dom/client';
import Display from './Components/Display'

const container = document.getElementById('root');
const root = createRoot(container);

root.render (
      <Display />
)