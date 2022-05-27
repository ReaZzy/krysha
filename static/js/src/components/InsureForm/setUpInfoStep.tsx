import React from 'react';
import FormBlock from '../FormBlock/FormBlock';
import FormInput from '../FormBlock/FormInput';
import { useTranslation } from 'react-i18next';

const SetUpInfoStep: React.FC = React.memo(() => {
  const { t } = useTranslation();
  return (
    <>
      <div className="p-4 px-4 md:p-8 mb-6 grid grid-cols-1  divide-y gap-y-10">
        <FormBlock title={t('objectAddress')}>
          <>
            <FormInput
              name="address"
              placeholder={t('address')}
              label={t('address')}
              cols={6}
            />
            <FormInput
              name="location"
              placeholder={t('location')}
              label={t('location')}
              cols={3}
            />

            <FormInput
              name="street"
              placeholder={t('street')}
              label={t('street')}
              cols={3}
            />
            <FormInput
              name="house"
              placeholder={t('house')}
              label={t('house')}
              cols={3}
            />
            <FormInput
              name="building"
              placeholder={t('locationHouse')}
              label={t('locationHouse')}
              cols={3}
            />
            <FormInput
              name="flat"
              placeholder={t('flat')}
              label={t('flat')}
              cols={3}
            />
            <FormInput
              name="postalIndex"
              type={'number'}
              placeholder={t('postalIndex')}
              label={t('postalIndex')}
              cols={3}
            />
          </>
        </FormBlock>
        <FormBlock title={t('ensureLimit')} description={t('ensureLimitDesc')}>
          <FormInput
            type="date"
            name="startDate"
            placeholder={t('dateOfEnsurance')}
            label={t('dateOfEnsurance')}
            cols={3}
          />
        </FormBlock>
        <FormBlock title={t('ensureMan')}>
          <>
            <FormInput
              name="fullName"
              placeholder={t('fio')}
              label={t('fio')}
              cols={6}
            />
            <FormInput
              type="date"
              name="birthday"
              placeholder={t('dateOfBirth')}
              label={t('dateOfBirth')}
              cols={3}
            />
            <FormInput
              type="email"
              name="email"
              placeholder={t('email')}
              label={t('email')}
              cols={6}
            />
            <FormInput
              type="tel"
              name="phone"
              placeholder={t('phone')}
              label={t('phone')}
              cols={6}
            />
            <FormInput
              type="checkbox"
              name="isBeneficiary"
              placeholder={t('isBeneficiary')}
              label={t('isBeneficiary')}
              cols={1}
            />
          </>
        </FormBlock>
      </div>
      <div className=" md:col-span-6 text-right p-4">
        <div className="inline-flex items-end">
          <button
            type={'submit'}
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
          >
            {t('next')}
          </button>
        </div>
      </div>
    </>
  );
});

export default SetUpInfoStep;
