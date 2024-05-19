import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      vehicle: faker.helpers.arrayElement(['CAMCEDI-01']),
      user: faker.helpers.arrayElement(['ADRIÁN PLAZA PEGUEROLES', 'ALBERTO SEMPERE TORTOSA', 'ALVARO PACHECO RODRIGUEZ', 'AMAIA SÁNCHEZ ARLEGUI']),
      taller: faker.helpers.arrayElement(['Loyal Centro Automotriz']),
      date: faker.helpers.arrayElement(['17/07/2023 10:50 am'])
    }
  })
  return elementArray
}

export default dataTable
