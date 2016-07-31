import routing from './app.routes';

import controllers from './controllers';

// eslint-disable-next-line no-undef
angular.module('app', [
    'ui.router',
    controllers
])
    .config(routing);