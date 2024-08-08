import { Sequelize } from 'sequelize';

// Configura la conexión a la base de datos MySQL
export const sequelize = new Sequelize('my_database', 'root', 'password', {
  host: 'mysql',
  dialect: 'mysql',
  logging: false,
});


