import { Sequelize } from 'sequelize';


// Create Sequelize instance
const sequelize = new Sequelize("demo", "postgres", "12345", {
  host: 'localhost',
  dialect: 'postgres',
});

 const connectionDB = async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
};

export default sequelize;
export { connectionDB };
