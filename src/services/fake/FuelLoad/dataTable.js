import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      folio: faker.helpers.arrayElement(['87769', '88769', '42354', '08229', '41572', '70975', '43015', '57289']),
      user: faker.helpers.arrayElement(['Juan Fernando Pérez del Corral', 'LAYOUT DE DISPERSIONES 10/08/2023', 'Juan Fernando Pérez del Corral', 'LAYOUT DE DISPERSIONES 10/08/2023', 'Juan Fernando Pérez del Corral', 'LAYOUT DE DISPERSIONES 10/08/2023']),
      date: faker.helpers.arrayElement(['17/07/2023 10:50 am', '31/03/2007 2:39 am', '14/06/2016 6:54 pm', '10/12/2008 3:43 pm', '12/07/2013 11:05 am', '11/11/2011 2:49 pm', '01/03/2006 11:47 am', '07/07/2000 2:25 pm', '18/03/2003 6:37 pm']),
      time: faker.helpers.arrayElement(['1 hr']),
      card: faker.helpers.arrayElement(['36354257430396', '36354257430396', '36354257430396', '344732275348764']),
      nomina: faker.helpers.arrayElement(['5610562915024640', '4903246006066384', '6377363194963223', '4026402913896908']),
      total: faker.helpers.arrayElement(['$100', '$1,000'])
    }
  })
  return elementArray
}

export default dataTable
