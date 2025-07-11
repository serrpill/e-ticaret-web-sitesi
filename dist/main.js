import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'jotai';
import App from './App';
import './index.css';
import { AuthProvider } from './context/AuthContext.tsx';
ReactDOM.createRoot(document.getElementById('root')).render(_jsx(React.StrictMode, { children: _jsx(Provider, { children: _jsx(AuthProvider, { children: _jsx(App, {}) }) }) }));
