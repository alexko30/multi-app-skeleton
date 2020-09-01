import { lazy } from 'react';

import render from './AppContainer';

const Tenant = lazy(() => import('./apps/Tenant'));

render(Tenant);