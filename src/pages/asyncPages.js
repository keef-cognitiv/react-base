import { lazy } from 'react';

export const RootPage = lazy(() => import('pages/root/RootPage'));
export const SandboxPage = lazy(() => import('pages/sandbox/SandboxPage'));
export const ErrorPage = lazy(() => import('./error/ErrorPage'));
