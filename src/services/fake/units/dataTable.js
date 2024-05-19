import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      type: faker.helpers.arrayElement(['A50']),
      name: faker.helpers.arrayElement(['CAMCEDI-01']),
      model: faker.helpers.arrayElement(['2021']),
      plates: faker.helpers.arrayElement(['FVK980A']),
      number: faker.helpers.arrayElement(['3N1CK3CE2ML216999']),
      direction: faker.helpers.arrayElement(['Dirección de Cobranza']),
      department: faker.helpers.arrayElement(['Cobranza Externa']),
      responsible: faker.helpers.arrayElement(['Martha Ofelia Mejia Cibrian', '']),
      use: faker.helpers.arrayElement(['Utilitario']),
      status: faker.helpers.arrayElement(['Asignado', 'Disponible'])
    }
  })
  return elementArray
}

export default dataTable
