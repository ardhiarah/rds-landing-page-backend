import { createRoot } from 'react-dom/client'
import { createInertiaApp, router } from '@inertiajs/react'
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers'
import { LanguageProvider } from './Contexts/LanguageContext'

createInertiaApp({
  resolve: (name) => resolvePageComponent(
    `./Pages/${name}.jsx`,
    import.meta.glob('./Pages/**/*.jsx')
  ),
  setup({ el, App, props }) {
    const root = createRoot(el)
    root.render(
      <LanguageProvider>
        <App {...props} />
      </LanguageProvider>
    )
  },
})

