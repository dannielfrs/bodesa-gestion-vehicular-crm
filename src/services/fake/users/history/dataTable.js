import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      folio: faker.helpers.arrayElement(['87769', '05549', '98535', '98535', '55577']),
      vehicle: faker.helpers.arrayElement(['Empresa']),
      placa: faker.helpers.arrayElement(['AJ-524']),
      date: faker.helpers.arrayElement(['24/05/2018 8:57 p.m.', '20/03/2004 9:02 a.m.', '13/06/2017 7:46 p.m.']),
      type: faker.helpers.arrayElement(['Preventivo', 'Correctivo']),
      taller: faker.helpers.arrayElement(['Enron Corp.', 'Zale Corporation', 'General Dynamics Corporation', 'Pier 1 Imports Inc.', 'Conseco Inc.']),
      total: faker.helpers.arrayElement(['$100']),
      deliverydate: faker.helpers.arrayElement(['01/01/2013 4:09 p.m.', '08/08/2005 1:15 a.m.', '27/03/2001 7:25 am', '03/10/2006 1:28 pm', '17/08/2018 7:59 am']),
    }
  })
  return elementArray
}

export default dataTable
