import _ from 'lodash';
//import printMe from './print.js';
//import './styles.css';
import { cube } from './math.js';
//import Print from './print3';

if (process.env.NODE_ENV !== 'production') {
  console.log('Looks like we are in development mode!');
}

function component() {
//  var element = document.createElement('div');
//  var btn = document.createElement('button');
  var element = document.createElement('pre');

//  element.innerHTML = _.join(['Hello', 'webpack'], ' ');

//  btn.innerHTML = 'Click me and check the console!';
//  btn.onclick = printMe;
//  element.appendChild(btn);

  element.innerHTML = [
    'Hello webpack!',
    '5 cubed is equal to ' + cube(5)
  ].join('\n\n');

//  element.onclick = Print.bind(null, 'Hello webpack!');

  return element;
}

//document.body.appendChild(component());
let element = component(); // 当 print.js 改变导致页面重新渲染时，重新获取渲染的元素
document.body.appendChild(element);

if (module.hot) {
  module.hot.accept('./print.js', function() {
    console.log('Accepting the updated printMe module!');
//    printMe();
    document.body.removeChild(element);
    element = component(); // 重新渲染页面后，component 更新 click 事件处理
    document.body.appendChild(element);
  })
}



//function getComponent() {
//  return import(/* webpackChunkName: "lodash" */ 'lodash').then(_ => {
//    var element = document.createElement('div');
//
//    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
//
//    return element;
//
//  }).catch(error => 'An error occurred while loading the component');
//}
//
//getComponent().then(component => {
//  document.body.appendChild(component);
//})
