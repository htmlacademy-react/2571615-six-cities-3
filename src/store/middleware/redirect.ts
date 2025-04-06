import { Middleware, PayloadAction } from '@reduxjs/toolkit';
import browserHistory from '../../browser-history';
import { rootReducer } from '../root-reducer';

type Reducer = ReturnType<typeof rootReducer>;

const redirect: Middleware<unknown, Reducer> =
  () => (next) => (action: PayloadAction<string>) => {
    if (action.type === 'redirectToRoute') {
      browserHistory.push(action.payload);
    }

    return next(action);
  };

export { redirect };
