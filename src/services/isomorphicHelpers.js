import { BrowserRouter } from 'react-router-dom';
import { StaticRouter } from 'react-router'

export const getIsomorphicRouter = () => {
  if (typeof window === 'undefined') {
    return StaticRouter;
  }

  return BrowserRouter;
}