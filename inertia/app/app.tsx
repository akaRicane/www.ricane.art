/// <reference path="../../adonisrc.ts" />
/// <reference path="../../config/inertia.ts" />

import { resolvePageComponent } from '@adonisjs/inertia/helpers'
import { createInertiaApp } from '@inertiajs/react'
import { createRoot } from 'react-dom/client'
import { FAVICON } from '~/globals/constants'
import '../css/app.css'

createInertiaApp({
  progress: { color: '#fb8b24' },

  title: (title) => (title ? title : import.meta.env.VITE_APP_NAME),

  resolve: (name) => {
    return resolvePageComponent(`../pages/${name}.tsx`, import.meta.glob('../pages/**/*.tsx'))
  },

  setup({ el, App, props }) {
    createRoot(el).render(<App {...props} />)

    const faviconTag: HTMLLinkElement = document.createElement('link')
    faviconTag.rel = 'shortcut icon'
    faviconTag.href = FAVICON
    document.head.appendChild(faviconTag)
  },
})
