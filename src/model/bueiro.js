import { Sequelize } from 'sequelize';
import sequelize from '../database/database';

const bueiroModel = sequelize.define('bueiros', {
  id: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true
  },
  logradouro: Sequelize.STRING,
  numero: Sequelize.SMALLINT,
  cidade: Sequelize.STRING(30),
  UF: Sequelize.STRING(2),
  cep: Sequelize.STRING(9),
  situacao: Sequelize.ENUM('vazio','medio','cheio','em limpeza')
});

export default bueiroModel