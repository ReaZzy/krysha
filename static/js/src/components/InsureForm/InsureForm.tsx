import React, { useState } from 'react';
import { Form, Formik } from 'formik';
import * as Yup from 'yup';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import SetUpInfoStep from './setUpInfoStep';

export enum STEPS {
  SET_UP_INFO = 'SET_UP_INFO',
  BILLING = 'BILLING',
}
const validationSchema = Yup.object().shape({
  address: Yup.string().min(3).max(64).required(),
  house: Yup.string().min(3).max(64).required(),
  building: Yup.string().min(3).max(64).required(),
  location: Yup.string().min(3).max(64).required(),
  street: Yup.string().min(3).max(64).required(),
  flat: Yup.string().max(32).required(),
  fullName: Yup.string().min(3).max(64).required(),
  postalIndex: Yup.number().required(),
  phone: Yup.string().length(12).required(),
  email: Yup.string().email().min(3).max(64).required(),
  isBeneficiary: Yup.boolean().required(),
});

const InsureForm: React.FC = React.memo(() => {
  const [currentStep, setCurrentStep] = useState<STEPS>(STEPS.SET_UP_INFO);
  return (
    <Formik
      initialValues={{
        address: '',
        house: '',
        building: '',
        location: '',
        street: '',
        flat: '',
        fullName: '',
        startDate: '',
        postalIndex: 0,
        birthday: '',
        phone: '',
        email: '',
        isBeneficiary: true,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        if (currentStep === STEPS.BILLING)
          return alert(JSON.stringify(values, null, 2));
        setCurrentStep(STEPS.BILLING);
      }}
    >
      <Form>
        <div className="max-w-7xl mx-auto bg-gray-50 rounded-lg  divide-y gap-y-5">
          <Breadcrumb
            currentStep={currentStep}
            setCurrentStep={setCurrentStep}
          />
          {currentStep === STEPS.SET_UP_INFO ? <SetUpInfoStep /> : null}
        </div>
      </Form>
    </Formik>
  );
});

export default InsureForm;
