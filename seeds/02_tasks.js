/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('tasks').del()

  // Inserts seed entries
  await knex('tasks').insert([
    {
      title: 'Vaccuum the floors',
      description: 'Vaccum the living room and all bedroom',
      is_complete: false,
      user_id: 2
    },
    {
      title: 'Clean the car',
      description: 'Wash, wax and vacuum the car',
      is_complete: false,
      user_id: 1,
    },
    {
      title: 'Buy groceries',
      description: 'Milk, bread, cheese, eggs, flour',
      is_complete: true,
      user_id: 3,
    }
  ]);

};
