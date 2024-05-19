import { faker } from '@faker-js/faker'

const dataTable = async (length) => {
  const elementArray = Array.from({ length }, () => {
    return {
      avatar: faker.image.avatar(),
      name: faker.person.fullName(),
      email: faker.helpers.arrayElement(['Alysa5@gmail.com', 'Kailee53@yahoo.com', 'Alexie.Ortiz@hotmail.com', 'Cary_Ziemann@hotmail.com', 'Geoffrey_Larkin@gmail.com', 'Gillian68@yahoo.com', 'Ashton.Greenfelder@yahoo.com', 'Shanon_Nicolas@hotmail.com', 'Brielle_Kris@yahoo.com']),
      phone: faker.helpers.arrayElement(['(631) 625-8926', '(531) 287-5699', '(247) 643-3069', '(573) 879-4483', '(555) 995-7342', '(637) 777-1290', '(862) 319-6846', '(467) 893-5155']),
      type: faker.helpers.arrayElement(['Motocicleta', 'Automóvil']),
      vehicle: faker.helpers.arrayElement(['Empresa']),
      placas: faker.helpers.arrayElement(['AJ-524']),
      status: faker.helpers.arrayElement(['En línea', 'Sesión caducada'])
    }
  })
  return elementArray
}

export default dataTable
