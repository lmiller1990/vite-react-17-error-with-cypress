import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

const debug = console.log

let shouldTransform = false
try {
  const react = require('react')
  shouldTransform = react.version.startsWith('17')
} catch (e) {
  // not using react
}

function plugin () {
  return {
    enforce: 'pre',
    transform: (code, id) => {
      if (shouldTransform && id.includes('cypress_react.js')) {
        return code.replace('react-dom/client', 'react-dom')
      }
    }
  }
}

const exclude = []

if (shouldTransform) {
  exclude.push('react-dom/client')
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [plugin(), react()],
  optimizeDeps: {
    exclude
  }
})
