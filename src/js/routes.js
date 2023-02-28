
import HomePage from '../pages/home.svelte';
import SettingsPage from '../pages/settings.svelte';
import AppsPage from '../pages/apps.svelte';
import Error from '../pages/404.svelte';

var routes = [
  {
    path: '/',
    component: HomePage,
  },
  {
    path: '/settings/',
    component: SettingsPage,
  },
  {
    path: '/apps/',
    component: AppsPage,
  },
  {
    path: '(.*)',
    component: Error,
  },
]

export default routes;
