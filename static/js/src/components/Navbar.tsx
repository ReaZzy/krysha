import React from 'react';
import { Popover, Disclosure } from '@headlessui/react';

const Navbar: React.FC = () => (
  <Disclosure as="nav" className="relative bg-white z-20">
    {({ open }: { open: boolean }) => (
      <div className={'mx-auto max-w-7xl'}>
        <>
          <div className="flex justify-between items-center px-4 py-6 sm:px-6 md:justify-start md:space-x-1 gap-10">
            <div>
              <a href="/" className="flex">
                <span className="sr-only">Крыша</span>
                <img
                  className="h-8 w-auto sm:h-10"
                  src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA2OCA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjIuNDE1NEwzNCAwTDY4IDIyLjQxNTRWNDdMMzQgMjQuNTg0NkwwIDQ3VjIyLjQxNTRaIiBmaWxsPSIjNDU0N0Y5Ii8+Cjwvc3ZnPgo="
                  alt=""
                />
              </a>
            </div>
            <div className="-mr-2 -my-2 md:hidden">
              <Disclosure.Button
                type="button"
                className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                aria-expanded="false"
              >
                <span className="sr-only">Открыть меню</span>
                <svg
                  className="h-6 w-6"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </Disclosure.Button>
            </div>
            <div className="hidden md:flex-1 md:flex md:items-center md:justify-between">
              <nav className="flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        type="button"
                        className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        aria-expanded="false"
                      >
                        <span>Страховка</span>
                        <svg
                          className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Popover.Button>
                      {open && (
                        <div className="absolute z-30 -ml-4 mt-3 transform w-screen max-w-md lg:max-w-3xl">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8 lg:grid-cols-2">
                              <a
                                href="#"
                                className="-m-3 p-1 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                                    />
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Analytics
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Get a better understanding of where your
                                    traffic is coming from.
                                  </p>
                                </div>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122"
                                    />
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Engagement
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Speak directly to your customers in a more
                                    meaningful way.
                                  </p>
                                </div>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                                    />
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Security
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Your customers&#039; data will be safe and
                                    secure.
                                  </p>
                                </div>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"
                                    />
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Integrations
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Connect with third-party tools that
                                    you&#039;re already using.
                                  </p>
                                </div>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
                                    />
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Automations
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Build strategic funnels that will drive your
                                    customers to convert
                                  </p>
                                </div>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                              >
                                <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white sm:h-12 sm:w-12">
                                  <svg
                                    className="h-6 w-6"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    aria-hidden="true"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      strokeWidth="2"
                                      d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                                    />
                                  </svg>
                                </div>
                                <div className="ml-4">
                                  <p className="text-base font-medium text-gray-900">
                                    Reports
                                  </p>
                                  <p className="mt-1 text-sm text-gray-500">
                                    Get detailed reports that will help you make
                                    more informed decisions
                                  </p>
                                </div>
                              </a>
                            </div>
                            <div className="p-5 bg-gray-50 sm:p-8">
                              <a
                                href="#"
                                className="-m-3 p-3 flow-root rounded-md hover:bg-gray-100"
                              >
                                <div className="flex items-center">
                                  <div className="text-base font-medium text-gray-900">
                                    Enterprise
                                  </div>
                                  <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-xs font-medium leading-5 bg-primary-100 text-primary-800">
                                    New
                                  </span>
                                </div>
                                <p className="mt-1 text-sm text-gray-500">
                                  Empower your entire team with even more
                                  advanced tools.
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </Popover>
                <a
                  href="/1"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  Блог
                </a>
                <a
                  href="/2"
                  className="text-base font-medium text-gray-500 hover:text-gray-900"
                >
                  О сервисе
                </a>
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        type="button"
                        className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500"
                        aria-expanded="false"
                      >
                        <span>Статьи</span>

                        <svg
                          className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                          aria-hidden="true"
                        >
                          <path
                            fillRule="evenodd"
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                            clipRule="evenodd"
                          />
                        </svg>
                      </Popover.Button>

                      {open && (
                        <div className="absolute z-30 left-1/2 transform -translate-x-1/2 mt-3 px-2 w-screen max-w-xs sm:px-0">
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              <a
                                href="#"
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Help Center
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  Get all of your questions answered in our
                                  forums or contact support.
                                </p>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Guides
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  Learn how to maximize our platform to get the
                                  most out of it.
                                </p>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Events
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  See what meet-ups and other events we might be
                                  planning near you.
                                </p>
                              </a>

                              <a
                                href="#"
                                className="-m-3 p-3 block rounded-md hover:bg-gray-50"
                              >
                                <p className="text-base font-medium text-gray-900">
                                  Security
                                </p>
                                <p className="mt-1 text-sm text-gray-500">
                                  Understand how we take your privacy seriously.
                                </p>
                              </a>
                            </div>
                          </div>
                        </div>
                      )}
                    </>
                  )}
                </Popover>
              </nav>
              <div className="flex items-center md:ml-12">
                <a
                  href="/property"
                  className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
                >
                  Рассчитать полис
                </a>
                <a
                  href="/sign-in"
                  className="ml-8 font-bold inline-flex items-center justify-center px-4 py-2 hover:bg-gray-200 border border-transparent rounded-md"
                >
                  Войти
                </a>
              </div>
            </div>
          </div>

          {open && (
            <div className="absolute top-0 inset-x-0 p-1 transition transform origin-top-right md:hidden">
              <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
                <div className="pt-5 pb-6 px-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <img
                        className="h-8 w-auto sm:h-10"
                        src="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjgiIGhlaWdodD0iNDciIHZpZXdCb3g9IjAgMCA2OCA0NyIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTAgMjIuNDE1NEwzNCAwTDY4IDIyLjQxNTRWNDdMMzQgMjQuNTg0NkwwIDQ3VjIyLjQxNTRaIiBmaWxsPSIjNDU0N0Y5Ii8+Cjwvc3ZnPgo="
                        alt=""
                      />
                    </div>
                    <div className="-mr-2">
                      <Disclosure.Button
                        type="button"
                        className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500"
                      >
                        <span className="sr-only">Close menu</span>
                      </Disclosure.Button>
                    </div>
                  </div>

                  <div className="mt-6">
                    <nav className="grid gap-6">
                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white" />
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Analytics
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white" />
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Engagement
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white" />
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Security
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white" />
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Integrations
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white" />
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Automations
                        </div>
                      </a>

                      <a
                        href="#"
                        className="-m-3 p-3 flex items-center rounded-lg hover:bg-gray-50"
                      >
                        <div className="flex-shrink-0 flex items-center justify-center h-10 w-10 rounded-md bg-primary-500 text-white" />
                        <div className="ml-4 text-base font-medium text-gray-900">
                          Reports
                        </div>
                      </a>
                    </nav>
                  </div>
                </div>
                <div className="py-6 px-5">
                  <div className="grid grid-cols-2 gap-4">
                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Pricing
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Docs
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Enterprise
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Help Center
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Guides
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Events
                    </a>

                    <a
                      href="#"
                      className="text-base font-medium text-gray-900 hover:text-gray-700"
                    >
                      Security
                    </a>
                  </div>
                  <div className="mt-6">
                    <a
                      href="#"
                      className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-gray-900 bg-primary-600 hover:bg-primary-700"
                    >
                      Sign up
                    </a>
                    <p className="mt-6 text-center text-base font-medium text-gray-500">
                      Existing customer?
                      <a
                        href="#"
                        className="text-primary-600 hover:text-primary-500"
                      >
                        Sign in
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          )}
        </>
      </div>
    )}
  </Disclosure>
);

export default Navbar;
