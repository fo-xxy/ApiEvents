import { JWTPayload, SignJWT, jwtVerify } from "jose";

// Tu "secret" o clave secreta para firmar el token
const secret = "Robert";
// Crear un JWT
async function firmar(
  payload,
  expiracion
) {
  const jwt = await new SignJWT(payload)
    .setProtectedHeader({ alg: "HS256" })
    .setIssuedAt()
    .setExpirationTime(expiracion || "1h") // Expira en 1 hora
    .sign(new TextEncoder().encode(secret));

  return jwt;
}

// Verificar un JWT
async function verificar(token) {

    //console.log(token);

    const { payload } = await jwtVerify(
        token,
        new TextEncoder().encode(secret)
      );

      return payload;
}

export { firmar, verificar };