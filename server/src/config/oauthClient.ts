import { OAuth2Client } from "google-auth-library";

// Crear instancia de OAuth2Client con la configuración necesaria
const oAuth2Client = new OAuth2Client(
  process.env.OAUTH_GOOGLE_CLIENT_ID as string,
  process.env.OAUTH_GOOGLE_CLIENT_SECRET as string,
  `${process.env.SERVER_URL}/auth/google/callback`,
);

export default oAuth2Client;
