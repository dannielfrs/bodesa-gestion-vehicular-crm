import { faker } from '@faker-js/faker'

const dataTable2 = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      type: faker.helpers.arrayElement(['A50']),
      name: faker.helpers.arrayElement(['CAMCEDI-01']),
      model: faker.helpers.arrayElement(['2021']),
      plates: faker.helpers.arrayElement(['FVK980A']),
      number: faker.helpers.arrayElement(['3N1CK3CE2ML216999']),
      direction: faker.helpers.arrayElement(['Dirección de Cobranza']),
      use: faker.helpers.arrayElement(['Utilitario']),
      responsible: faker.helpers.arrayElement(['Martha Ofelia Mejia Cibrian', '']),
      status: faker.helpers.arrayElement(['En uso', 'Disponible'])
    }
  })
  return elementArray
}

export default dataTable2
