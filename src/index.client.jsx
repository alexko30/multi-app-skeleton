import { lazy } from 'react';

import render from './AppContainer';

const Client = lazy(() => import('./apps/Client'));

render(Client);