// React
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Navbar from './Components/navbar/navbar';

// Router
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";
import Router from './router.jsx';
const router = createBrowserRouter(Router);

// Firebase
import { initializeApp } from "firebase/app";
import Config from './config.js';

const firebaseConfig = Config.firebase;
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Navbar />
    <RouterProvider router={router} />
  </React.StrictMode>
);
