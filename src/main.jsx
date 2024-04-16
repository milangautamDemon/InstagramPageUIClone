import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { CommentProvider } from './commentProvider/CommentProvider.jsx'
import { MenuListsProvider } from './commentProvider/MenuListsProvider.jsx'
import { LoveCountProvider } from './commentProvider/LoveCountProvider.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <LoveCountProvider>
    <MenuListsProvider>
    <CommentProvider>
      <App />
    </CommentProvider>
    </MenuListsProvider>
    </LoveCountProvider>
  </React.StrictMode>
)
