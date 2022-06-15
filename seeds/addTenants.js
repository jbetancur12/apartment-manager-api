const faker = require("@faker-js/faker").faker


/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */

const createFakerUser = () => ({
  doc: faker.datatype.number({
    min: 1087000000,
    max: 1089000000
  }),
  firstName: faker.name.firstName(),
  lastName: faker.name.lastName(),
  email: faker.internet.email(),
  phone: faker.phone.phoneNumber('###-###-##-##'),
  address: faker.address.streetAddress()
})

exports.seed = async function(knex) {
  const fakeTenants = []
  const desiredFakedUsers = 1000
  for (let i = 0; i < desiredFakedUsers; i++) {
    console.log("=>>>>>>>>>>>>>>",i);
    fakeTenants.push(createFakerUser())
  
}

  // Deletes ALL existing entries
  await knex('tenant').del()
  await knex('tenant').insert(fakeTenants);
};
