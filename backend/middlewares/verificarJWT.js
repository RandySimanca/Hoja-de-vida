//backend/middlewares/verificarJWT.js
/*import jwt from 'jsonwebtoken';

export const verificarJWT = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.replace('Bearer ', '');

  if (!token) {
    return res.status(401).json({ mensaje: 'Token no proveído' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = {
      uid: decoded.uid,       // coincide con el payload
      roles: decoded.roles
    };
    next();
  } catch (err) {
    return res.status(401).json({ mensaje: 'Token inválido' });
  }
};

export default verificarJWT*/


import jwt from 'jsonwebtoken';

const verificarJWT = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ mensaje: 'Token no proporcionado' });

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.usuario = { uid: decoded.uid, roles: decoded.roles };
    console.log('🔐 req.usuario set to:', req.usuario);
    next();
  } catch (error) {
    res.status(401).json({ mensaje: 'Token inválido' });
  }
};

export default verificarJWT;




