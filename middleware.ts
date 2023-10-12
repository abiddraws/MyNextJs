import createMiddleware from 'next-intl/middleware';
import {locales} from './navigation';
 
export default createMiddleware({
  defaultLocale: 'en',
  locales
});