"use strict";Object.defineProperty(exports, "__esModule", {value: true}); function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }var _User = require('../models/User'); var _User2 = _interopRequireDefault(_User);

class UserController {
  async store(req, res) {
    try {
      const newUser = await _User2.default.create(req.body);
      const {
        id, nome, email, createdAt,
      } = newUser;

      res.json({
        id, nome, email, createdAt,
      });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async index(req, res) {
    try {
      const users = await _User2.default.findAll();
      return res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async show(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);
      if (!user) {
        return res.status(404).json('Usuário não encontrado');
      }
      return res.json(user);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async update(req, res) {
    try {
      const user = await _User2.default.findByPk(req.userId);

      if (!user) {
        return res.status(404).json('Usuário não encontrado');
      }
      const novosDados = await user.update(req.body);
      const { nome, email, updatedAt } = novosDados;

      return res.json({
        nome, email, updatedAt,
      });
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const user = await _User2.default.findByPk(req.params.id);

      if (!user) {
        return res.status(404).json('Usuário não encontrado');
      }
      await user.destroy();

      return res.json('Usuário excluido com sucesso!');
    } catch (e) {
      res.status(400).json({
        errors: e.errors.map((err) => err.message),
      });
    }
  }
}

exports. default = new UserController();
