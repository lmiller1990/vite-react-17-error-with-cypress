import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

const debug = console.log
console.log('Vite!')

export const React18 = () => {
  console.log('REACT 18')
  return {
    name: 'cypress:missing-react-dom-client',
    resolveId (source) {
      debug('source is %s', source)
      if (source === 'react-dom/client') {
        try {
          return require.resolve('react-dom/client')
        } catch (e) {
          debug('error resolving %s, falling back to client/reactDomClientPlaceholder.js', source)

          // This is not a react 18 project, need to stub out to avoid error
          return path.resolve(__dirname, 'placeholder.js')
        }
      }
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [React18(), react()],
})
