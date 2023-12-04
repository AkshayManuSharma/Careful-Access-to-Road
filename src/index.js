import React from 'react';
import App from './App';
//import { createRoot } from './react-dom/client'; never worked with this
import { createRoot } from '@react-three/fiber';// stopped working. (╯°□°)╯︵ ┻━┻

const root = createRoot(document.getElementById('root'));
root.render(<App/>)