import { sequelize } from '../database/mysql';
import UserModel from './userMySQL';

const models = {
  User: UserModel,
  // Add more models as needed
};

const initModels = () => {
  Object.values(models).forEach((model) => {
    // model.init(sequelize);
  });
};

export { initModels, models };
