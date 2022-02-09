import React from 'react';
import { useFormik } from 'formik';

const InsureForm: React.FC = React.memo(() => {
  const formik = useFormik({
    initialValues: {
      address: '',
      house: '',
      building: '',
      location: '',
      street: '',
      flat: '',
      postalIndex: 0,
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={'max-w-7xl mx-auto bg-gray-50 rounded-lg'}>
      <form onSubmit={formik.handleSubmit}>
        <div className="p-4 px-4 md:p-8 mb-6 grid grid-cols-1  divide-y gap-y-10">
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600 max-w-sm">
              <p className="font-medium text-lg">Адрес объекта</p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                <div className="md:col-span-6">
                  <label htmlFor="full_name">Адрес</label>
                  <input
                    type="text"
                    name="address"
                    placeholder={'Адрес'}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="email">Населённый пункт</label>
                  <input
                    type="text"
                    name="location"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.location}
                    placeholder="Населённый пункт"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="email">Улица</label>
                  <input
                    type="text"
                    name="street"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.street}
                    placeholder="Улица"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="email">Дом</label>
                  <input
                    type="text"
                    name="house"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.house}
                    placeholder="Дом"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="email">Корпус, строение</label>
                  <input
                    type="text"
                    name="building"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.building}
                    placeholder="Корпус, строение"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="email">Квартира</label>
                  <input
                    type="text"
                    name="flat"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.flat}
                    placeholder="Квартира"
                  />
                </div>
                <div className="md:col-span-3">
                  <label htmlFor="email">Почтовый индекс</label>
                  <input
                    type="number"
                    name="postalIndex"
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.postalIndex}
                    placeholder="Почтовый индекс"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
            <div className="text-gray-600 max-w-sm">
              <p className="font-medium text-lg">Срок страхования</p>
              <p>
                Покрытие действительно на 15-й день после даты покупки. В
                календаре выбирете дату начала действия полиса.
              </p>
            </div>

            <div className="lg:col-span-2">
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-6">
                <div className="md:col-span-3">
                  <label htmlFor="full_name">Дата начала страховки</label>
                  <input
                    type="date"
                    name="startDate"
                    placeholder={'Дата начала страховки'}
                    className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                    onChange={formik.handleChange}
                    value={formik.values.address}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-6 text-right">
          <div className="inline-flex items-end">
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </div>
  );
});

export default InsureForm;
