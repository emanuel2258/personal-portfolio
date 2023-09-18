import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import AboutMe from './routes/AboutMe';
import reportWebVitals from './reportWebVitals';
import RootLayout from './routes/RootLayout';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import ProjectList from './routes/ProjectsList';
import ErrorPage from "./routes/ErrorPage";
import ProjectDetails from './routes/ProjectDetails';
import Contact from './routes/Contact';

const router = createBrowserRouter([
  {path: '/', element: <RootLayout />, errorElement: <ErrorPage />, 
  children:[
    {path:'/', element:<AboutMe/>},
    {path:'/personal-portfolio', element:<AboutMe/>},
    {path: '/projects', element: <ProjectList />},
    {path: '/projects/:id', element: <ProjectDetails />},
    {path: '/contact', element:<Contact />}
  ] }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
