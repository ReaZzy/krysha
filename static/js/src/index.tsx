import ReactDOM from 'react-dom';
import React, { ReactPortal, useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';

const App: React.FC = () => {
  const elems: HTMLCollectionOf<Element> =
    document.getElementsByTagName('component');
  const [portals, setPortals] = useState<ReactPortal[]>([]);
  const importRender = useCallback(async (id: string): Promise<ReactPortal> => {
    const module = await import(`./components/${id}`);
    const component = React.createElement(module?.default);
    const item = document.getElementById(id);
    return ReactDOM.createPortal(component, item!);
  }, []);

  useEffect(() => {
    const promises: Promise<ReactPortal>[] = [];

    Array.prototype.slice.call(elems).forEach((item: Element) => {
      if (item.hasAttribute('id') && !item.hasAttribute('isPage')) {
        const id = item.attributes.getNamedItem('id')!.nodeValue!;
        promises.push(importRender(id));
      }
    });

    Promise.all(promises)
      .then((values) => setPortals(values))
      .catch((e) => console.error(e));
  }, []);

  return <BrowserRouter>{portals}</BrowserRouter>;
};

ReactDOM.render(<App />, document.getElementById('root'));
