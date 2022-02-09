import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App1 from './components/1';
import App2 from './components/2';
import InsureForm from './components/InsureForm';

const elems: HTMLCollectionOf<Element> =
  document.getElementsByTagName('component');
const promises = [];

const getElementAttrs = (el) => {
  const props = {};
  [].slice.call(el.attributes).map((attr) => {
    return (props[attr.name] = attr.value);
  });
  return props;
};

const importRender = (props): Promise<void> => {
  const { id, ...rest } = props;
  return new Promise((resolve) => {
    import('./components/' + id).then((module) => {
      const component = React.createElement(withRoute(module.default), rest);
      const item = document.getElementById(id);
      return ReactDOM.render(component, item, function () {
        resolve();
      });
    });
  });
};

for (let item of elems) {
  if (item.hasAttribute('id')) {
    promises.push(importRender(getElementAttrs(item)));
  }
}

const withRoute = (Component) => () => {
  return (
    <BrowserRouter>
      <Component />
      <Routes>
        <Route element={<App1 />} path={'1'} />
        <Route element={<App2 />} path={'2'} />
      </Routes>
    </BrowserRouter>
  );
};
