import React, { Dispatch } from 'react';
import { STEPS } from '../InsureForm/InsureForm';
import { useTranslation } from 'react-i18next';

interface IProps {
  currentStep: STEPS;
  setCurrentStep: Dispatch<STEPS>;
}

const Breadcrumb: React.FC<IProps> = React.memo(
  ({ currentStep, setCurrentStep }) => {
    const { t } = useTranslation();
    return (
      <nav
        className="flex flex-row justify-between items-center p-4 "
        aria-label="Breadcrumb"
      >
        <div className="md:p-8 grid grid-cols-1 ">
          <ol className="text-gray-600 max-w-sm inline-flex items-center space-x-1 md:space-x-3">
            <li>
              <button
                type={'button'}
                className={`ml-1 text-md font-medium ${
                  currentStep === STEPS.SET_UP_INFO
                    ? 'text-blue-600 hover:text-blue-700 md:ml-2'
                    : 'text-gray-400'
                }`}
                onClick={() => setCurrentStep(STEPS.SET_UP_INFO)}
              >
                {t('insurance')}
              </button>
            </li>

            <li aria-current="page">
              <div className="flex items-center">
                <svg
                  className="w-6 h-6 text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                    clipRule="evenodd"
                  />
                </svg>
                <button
                  className={`ml-1 text-md font-medium cursor-pointer ${
                    currentStep === STEPS.BILLING
                      ? 'text-blue-600 hover:text-blue-700 md:ml-2'
                      : 'text-gray-400'
                  }`}
                  type={'submit'}
                >
                  {t('payment')}
                </button>
              </div>
            </li>
          </ol>
        </div>
        <div className="md:col-span-6 text-right">
          <div className="inline-flex items-end gap-5 items-center">
            <p className=" text-gray-900 text-3xl"> 0??? </p>
            <button
              type={'submit'}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              {currentStep === STEPS.SET_UP_INFO ? t('next') : t('previous')}
            </button>
          </div>
        </div>
      </nav>
    );
  },
);

export default Breadcrumb;
