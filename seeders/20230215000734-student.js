'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    const date = new Date()

    await queryInterface.bulkInsert('Students', [{
      name: 'Danielle Colucci',
      city: 'Boston', 
      average: 100,
      createdAt: date,
      updatedAt: date
    }])
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Students', null, {})
  }
};
