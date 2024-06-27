import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import { ChakraProvider, theme } from '@chakra-ui/react';
import { BrowserRouter } from 'react-router-dom';

import '@/styles/global.scss';

ReactDOM.createRoot(document.getElementById('root')!).render(
    <BrowserRouter>
        <ChakraProvider theme={theme}>
            <App />
        </ChakraProvider>
    </BrowserRouter>
);
