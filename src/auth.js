import { verificar } from '../src/firmarToken';

const verifyToken = async (req, res, next) => {
  const token = req.headers['authorization'];

  if (!token) {
    return res.status(401).json({ error: 'No estas autorizado a realizar esta acción.' });
  }

  try {
    const bearerToken = token.split(" ")[1]

    const payload = await verificar(bearerToken);

    req.user = payload;
    next();
  } catch (error) {
    console.error(error);
    return res.status(401).json({ error: 'No estas autorizado a realizar esta acción.' });
  }
};

export const methods = {
    verifyToken
};