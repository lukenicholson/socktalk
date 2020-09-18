'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    
    return queryInterface.bulkInsert("Items",[
      {
        companyId: 1,
        name:'banana',
        imgSrc: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2019/03/bananas-in-a-bowl.jpg',
        type: "fruit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        name:'apple',
        imgSrc: 'https://knowledge.wharton.upenn.edu/wp-content/uploads/2014/03/apple.jpg',
        type: "fruit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 2,
        name:'banana',
        imgSrc: 'https://www.bbcgoodfood.com/sites/default/files/editor_files/2019/03/bananas-in-a-bowl.jpg',
        type: "fruit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 2,
        name:'orange',
        type: "fruit",
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        name:'orange',
        imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/7/7b/Orange-Whole-%26-Split.jpg',
        type: "fruit",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 2,
        name:'broccoli',
        imgSrc: 'https://www.cookforyourlife.org/wp-content/uploads/2018/08/shutterstock_294838064-min.jpg',
        type: "vegetable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 2,
        name:'squash',
        imgSrc: 'https://www.thespruceeats.com/thmb/Brglu0OPovmKGmUq0X_hnCaWelo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/zucchini-5e139d4483734a84b5b5e751d90f2d58.jpg',
        type: "vegetable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 2,
        name:'asparagus',
        imgSrc: 'https://47qz0mxgojo3bqn2n341by51-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/how-to-make-roasted-asparagus-355-768x768.jpg',
        type: "vegetable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        name:'squash',
        imgSrc: 'https://www.thespruceeats.com/thmb/Brglu0OPovmKGmUq0X_hnCaWelo=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/zucchini-5e139d4483734a84b5b5e751d90f2d58.jpg',
        type: "vegetable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        companyId: 1,
        name:'asparagus',
        imgSrc: 'https://47qz0mxgojo3bqn2n341by51-wpengine.netdna-ssl.com/wp-content/uploads/2020/01/how-to-make-roasted-asparagus-355-768x768.jpg',
        type: "vegetable",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ],{});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
