import jwt from 'jsonwebtoken';
import User from '../models/User';

class TokenController {
  async store(req, res) {
    const { email = '', password = '' } = req.body;

    if (!email || !password) {
      return res.status(401).json({
        errors: ['Credenciais inválidas!'],
      });
    }

    const user = await User.findOne({ where: { email } });

    if (!user) {
      return res.status(404).json({
        errors: ['Usuário não existe na base de dados!'],
      });
    }

    if (!(await user.checkPassword(password))) {
      return res.status(401).json({
        errors: ['Senha inválida!'],
      });
    }

    const { id } = user;
    const token = jwt.sign({ id, email }, process.env.TOKEN_SECRET, {
      expiresIn: process.env.TOKEN_EXPIRATION,
    });

    res.json({ token, user: { nome: user.nome, id, email } });
  }
}

export default new TokenController();
