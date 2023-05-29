import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Alunos';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

class Database {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map((model) => model.init(this.connection))
      .map(
        (model) => model.associate && model.associate(this.connection.models),
      );
  }
}

export default new Database();
