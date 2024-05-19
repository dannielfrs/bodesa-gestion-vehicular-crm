import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
      email: faker.helpers.arrayElement(['Alysa5@gmail.com', 'Kailee53@yahoo.com', 'Alexie.Ortiz@hotmail.com', 'Cary_Ziemann@hotmail.com', 'Geoffrey_Larkin@gmail.com', 'Gillian68@yahoo.com', 'Ashton.Greenfelder@yahoo.com', 'Shanon_Nicolas@hotmail.com', 'Brielle_Kris@yahoo.com']),
      type: faker.helpers.arrayElement(['Registro de recargas']),
      user: faker.helpers.arrayElement(['Carga de combustible 1254']),
      placas: faker.helpers.arrayElement(['AJ-524']),
      status: faker.helpers.arrayElement(['En línea', 'Sesión caducada'])
    }
  })
  return elementArray
}

export default dataTable
