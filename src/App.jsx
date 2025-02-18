import './App.css'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './Components/Layout/Layout';
import NotFound from './Components/Not_Found/NotFound';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';

function App() {
   const routes = createBrowserRouter([
     {
       path: "/",
       element: <Layout />,
       errorElement: <NotFound />,
       children: [
         { index: true, element: <Home /> },
         { path: "home", element: <Home /> },
         { path: "about", element: <About /> },
         { path: "skills", element: <Skills /> },
         { path: "projects", element: <Projects /> },
         { path: "contact", element: <Contact /> },
       ],
     },
   ]);

  return (
    <>
    <RouterProvider router={routes} />
  
    </>
  )
}

export default App
