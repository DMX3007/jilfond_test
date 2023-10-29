import { StrictMode } from "react";
import { createRoot } from 'react-dom/client';
import "./global.scss";
import { App } from "./app";


const domNode = document.getElementById('root');
// const router = createBrowserRouter([{
//   path: '/about',
//   element: <About />
// },
// {
//   path: '/',
//   element: <App />,
// }, {

// }
// ]);

const root = createRoot(domNode);
root.render(<StrictMode>
  <App />
</StrictMode>);
