import React from 'react';
import ReactDOMServer from 'react-dom/server';
import {useRouterHistory, RouterContext, match} from 'react-router';
import {createMemoryHistory, useQueries} from 'history';
import configureStore from '../../store/configureStore';
import { Provider } from 'react-redux';
import { Promise } from 'bluebird';
import { StyleRoot } from 'radium';
import { config } from '../../config/index.config.js';
import createRoutes from '../../routes/index';

export default function (app) {
    app.get('*', (req, res, next) => {
        let history = useRouterHistory(useQueries(createMemoryHistory))();
        let store = configureStore();
        let routes = createRoutes(history);
        let location = history.createLocation(req.url);
        const createElement = (Component, props) => (
            <Component
                {...props}
                radiumConfig={{ userAgent: req.headers['user-agent'] }}
                />
        );

        match({ routes, location }, (error, redirectLocation, renderProps) => {

            if (redirectLocation) {
                res.redirect(301, redirectLocation.pathname + redirectLocation.search);
            }
            else if (error) {
                res.status(500).send(error.message)
            }
            else if (renderProps == null) {
                res.status(404).send('Not Found');
            }
            else {
                getData().then(() => {
                    let reduxState = escape(JSON.stringify(store.getState()));
                    let html = ReactDOMServer.renderToString(
                        <StyleRoot>
                            <Provider store ={store}>
                                <RouterContext
                                    {...renderProps}
                                    createElement={createElement} />
                            </Provider>
                        </StyleRoot>
                    );
                    res.render('index', { html, reduxState });
                });
            }
            function getData() {
                return new Promise((resolve, reject) => {
                    let { query, params } = renderProps
                    let data = renderProps.components[renderProps.components.length - 1].WrappedComponent
                    try {
                        if (data.fetchData) {
                            data.fetchData({ query, params, store, history })
                        }
                        resolve();
                    }
                    catch (e) {
                        console.log(e);
                    }
                });
            }
        });
    });
}