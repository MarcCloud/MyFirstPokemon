import router from 'monarch-routes';
import home from './home';
import detail from './detail';
const routes = {
    '/': home,
    '/detail/:name': detail
};

export default router(routes);
