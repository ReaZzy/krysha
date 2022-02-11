import ReactDOM from 'react-dom';
import React from 'react';
import './index.css';
import { BrowserRouter } from 'react-router-dom';

const elems: HTMLCollectionOf<Element> =
  document.getElementsByTagName('component');
const promises = [];

const getElementAttrs = (el: Element) => {
  const props: { [key: string]: string } = {};
  [].slice.call(el.attributes).map(({ name, value }) => (props[name] = value));
  return props;
};

const importRender = (props: { [key: string]: string }): Promise<void> => {
  const { id, ...rest } = props;
  return new Promise((resolve) => {
    import(`./components/${id}`).then((module) => {
      const component = React.createElement(withRoute(module.default), rest);
      const item = document.getElementById(id);
      return ReactDOM.render(component, item, () => {
        resolve();
      });
    });
  });
};

for (const item of elems) {
  if (item.hasAttribute('id')) {
    promises.push(importRender(getElementAttrs(item)));
  }
}

const withRoute = (Component: React.FC) =>
  function () {
    return (
      <BrowserRouter>
        <Component />
      </BrowserRouter>
    );
  };
