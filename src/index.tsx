// React
import ReactDOM from 'react-dom/client';

// Import app
import App from './App';

// Import sass

import "./index.scss";

// Set the root
const root: ReactDOM.Root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

// Render app
root.render(<App />);
