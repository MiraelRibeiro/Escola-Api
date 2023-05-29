import User from '../models/User';

class UserController {
  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
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
      const users = await User.findAll();
      return res.json(users);
    } catch (e) {
      res.status(400).json(e);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
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
      const user = await User.findByPk(req.userId);

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
      const user = await User.findByPk(req.params.id);

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

export default new UserController();
