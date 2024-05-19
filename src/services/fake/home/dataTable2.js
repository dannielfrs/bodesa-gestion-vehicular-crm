import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      name: faker.helpers.arrayElement(['CAMCEDI-01']),
      hour: faker.helpers.arrayElement(['Hoy 2:53']),
      avatar: faker.image.avatar(),
      solicitud: faker.helpers.arrayElement(['Pendiente'])
    }
  })
  return elementArray
}

export default dataTable
