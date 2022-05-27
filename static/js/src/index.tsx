import ReactDOM from 'react-dom';
import React, { ReactPortal, useCallback, useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import i18next from 'i18next';
import {
  I18nextProvider,
  initReactI18next,
  useTranslation,
} from 'react-i18next';

i18next.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'Welcome to React': 'Welcome to React and react-i18next',
      },
    },
  },
  lng: window.navigator.language,
  fallbackLng: 'ru',

  interpolation: {
    escapeValue: false,
  },
});
console.log(window.navigator.language);
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

  const { t } = useTranslation();
  return (
    <BrowserRouter>
      <I18nextProvider i18n={i18next}>
        {portals} {t('hello')}
      </I18nextProvider>
    </BrowserRouter>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
