//import packages/libraries...
import React from "react";
import { createRoot } from 'react-dom/client';
import {RouterProvider,} from "react-router-dom";
import { PorscheDesignSystemProvider } from '@porsche-design-system/components-react';

//import Local files...
import Router from "./Components/Router";
import './Components/Router/index' //need to call router/index.js file to recall changes in the main state to pass all components


//import Styles...
import '../styles/index.css'




createRoot(document.getElementById("root")).render(<React.StrictMode><PorscheDesignSystemProvider><RouterProvider router={Router} /></PorscheDesignSystemProvider></React.StrictMode>)