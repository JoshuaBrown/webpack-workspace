import React from 'react';
import ReactDom from 'reactDom';
import { Provider } from 'react-redux';
import { createStore, applyMidddleware } from 'redux';
import rootReducer from './rootReducer';

// const container = document.querySelector();
// const createStoreWithMiddleWare = applyMidddleware()(createStore);

/*ReactDom.render(
    <Provider store={createStoreWithMiddleWare(rootReducer)}>
    </Provider>, container);
);*/