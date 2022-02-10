import React from 'react';
import { Form, Formik } from 'formik';
import Breadcrumb from '../Breadcrumb/Breadcrumb';
import FormBlock from '../FormBlock/FormBlock';
import FormInput from '../FormBlock/FormInput';

const InsureForm: React.FC = React.memo(() => {
  return (
    <div className="max-w-7xl mx-auto bg-gray-50 rounded-lg  divide-y gap-y-5">
      <Breadcrumb />
      <Formik
        initialValues={{
          address: '',
          house: '',
          building: '',
          location: '',
          street: '',
          flat: '',
          fullName: '',
          startDate: Date.now(),
          postalIndex: 0,
          birthday: Date.now(),
          phone: '',
          email: '',
          isBeneficiary: true,
        }}
        onSubmit={(values) => {
          alert(JSON.stringify(values, null, 2));
        }}
      >
        <Form>
          <div className="p-4 px-4 md:p-8 mb-6 grid grid-cols-1  divide-y gap-y-10">
            <FormBlock title="Адрес объекта">
              <>
                <FormInput
                  name="address"
                  placeholder="Адрес"
                  label={'Адрес'}
                  cols={6}
                />
                <FormInput
                  name="location"
                  placeholder="Населённый пункт"
                  label={'Населённый пункт'}
                  cols={3}
                />
                <FormInput
                  name="street"
                  placeholder="Улица"
                  label={'Улица'}
                  cols={3}
                />
                <FormInput
                  name="building"
                  placeholder="Корпус, строение"
                  label={'Корпус, строение'}
                  cols={3}
                />
                <FormInput
                  name="flat"
                  placeholder="Квартира"
                  label={'Квартира'}
                  cols={3}
                />
                <FormInput
                  name="postalIndex"
                  type={'number'}
                  placeholder={'Почтовый индекс'}
                  label={'Почтовый индекс'}
                  cols={3}
                />
              </>
            </FormBlock>
            <FormBlock
              title="Срок страхования"
              description="Покрытие действительно на 15-й день после даты покупки. В календаре выбирете дату начала действия полиса."
            >
              <FormInput
                type="date"
                name="startDate"
                placeholder="Дата начала страховки"
                label={'Дата начала страховки'}
                cols={3}
              />
            </FormBlock>
            <FormBlock title="Страхователь">
              <>
                <FormInput
                  name="fullName"
                  placeholder="Фамилия Имя Отчество"
                  label={'Фамилия Имя Отчество'}
                  cols={6}
                />
                <FormInput
                  type="date"
                  name="birthday"
                  placeholder="Дата рождения"
                  label={'Дата рождения'}
                  cols={3}
                />
                <FormInput
                  type="email"
                  name="email"
                  placeholder="Почта"
                  label={'Почта'}
                  cols={6}
                />
                <FormInput
                  type="tel"
                  name="phone"
                  placeholder="Номер телефона"
                  label={'Номер телефона'}
                  cols={6}
                />
                <FormInput
                  type="checkbox"
                  name="isBeneficiary"
                  placeholder="Является выгодоприобретателем"
                  label={'Является выгодоприобретателем'}
                  cols={1}
                />
              </>
            </FormBlock>
          </div>
          <div className="md:col-span-6 text-right">
            <div className="inline-flex items-end">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              >
                Далее
              </button>
            </div>
          </div>
        </Form>
      </Formik>
    </div>
  );
});

export default InsureForm;
