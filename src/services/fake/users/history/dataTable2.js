import { faker } from '@faker-js/faker'

const dataTable2 = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      folio: faker.helpers.arrayElement(['87769', '05549', '98535', '98535', '55577']),
      date: faker.helpers.arrayElement(['24/05/2018 8:57 p.m.', '20/03/2004 9:02 a.m.', '13/06/2017 7:46 p.m.']),
      kilometraje: faker.helpers.arrayElement(['183 km', '98170', '59016', '70708', '29916']),
      combustible: faker.helpers.arrayElement(['5 lt']),
      rendimiento: faker.helpers.arrayElement(['40 km / 1 lt']),
      hourdate: faker.helpers.arrayElement(['01/01/2013 4:09 p.m.', '08/08/2005 1:15 a.m.', '27/03/2001 7:25 am', '03/10/2006 1:28 pm', '17/08/2018 7:59 am']),
      time: faker.helpers.arrayElement(['1 hr']),
      total: faker.helpers.arrayElement(['$100'])
    }
  })
  return elementArray
}

export default dataTable2
