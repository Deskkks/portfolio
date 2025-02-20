import { Sequelize } from 'sequelize';
import sequelize from '../database/database';

const usersModel = sequelize.define('users', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  email: Sequelize.STRING,
  senha: Sequelize.STRING
});

export default usersModel