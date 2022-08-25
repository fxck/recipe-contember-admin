import * as React from 'react'
import { ApplicationEntrypoint, LoginEntrypoint, Pages, runReactApp } from '@contember/admin'
import { Layout } from './components/Layout'
import '@contember/admin/style.css'

const apiBaseUrl = import.meta.env.VITE_CONTEMBER_ADMIN_API_BASE_URL as string
const loginToken = import.meta.env.VITE_CONTEMBER_ADMIN_LOGIN_TOKEN as string
const projectSlug = import.meta.env.VITE_CONTEMBER_ADMIN_PROJECT_NAME as string

if (window.location.pathname === '/') {
    // Login page
    runReactApp(
        <LoginEntrypoint
            apiBaseUrl={apiBaseUrl}
            loginToken={loginToken}
            projects={[projectSlug]}
            formatProjectUrl={it => `/${it.slug}/`}
        />,
    )
} else if (window.location.pathname.startsWith('/' + projectSlug)) {
    // Administration itself page
    runReactApp(
        <ApplicationEntrypoint
            basePath={`/${projectSlug}/`}
            apiBaseUrl={apiBaseUrl}
            project={projectSlug}
            stage="live"
						defaultDimensions={{ locale: ['en'] }}
						envVariables={{ WEB_URL: import.meta.env.VITE_CONTEMBER_ADMIN_WEB_URL }}
            children={<Pages layout={Layout} children={import.meta.glob('./pages/**/*.tsx')} />}
        />
    )
} else {
    // Page not found - redirect to login
    window.location.href = '/'
}
