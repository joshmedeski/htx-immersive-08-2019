"use strict";
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(
      "Categories",
      [
        { name: "Wine", createdAt: new Date(), updatedAt: new Date() },
        { name: "Beer", createdAt: new Date(), updatedAt: new Date() },
        { name: "Cocktail", createdAt: new Date(), updatedAt: new Date() },
        { name: "Smoothie", createdAt: new Date(), updatedAt: new Date() },
        { name: "Juice", createdAt: new Date(), updatedAt: new Date() }
      ],
      {}
    );
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Categories", null, {});
  }
};
