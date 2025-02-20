import { Sequelize } from 'sequelize';
import sequelize from '../database/database';

const classeModel = sequelize.define('classe', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  classe: Sequelize.ENUM('podre','pessimo','ruim','mediano','bom','incrivel','perfeito'),
  descricao: Sequelize.STRING,
  data: Sequelize.STRING,
  usuario: Sequelize.INTEGER
});

export default classeModel