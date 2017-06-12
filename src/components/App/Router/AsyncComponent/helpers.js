// export const routeResolver = (route, onLoad) => require.ensure([], require => {
//   // NOTE: the path construction should be performed in require function due to require.ensure specs
//   const asyncComponent = require('../Routes/' + route.charAt(0).toUpperCase() + route.slice(1) + '/index.js');

//   onLoad(asyncComponent.default)
// });

export const routeResolver = (route, onLoad) =>
  import('../Routes/' + route.charAt(0).toUpperCase() + route.slice(1) + '/index.js').then(module => onLoad(module.default));
