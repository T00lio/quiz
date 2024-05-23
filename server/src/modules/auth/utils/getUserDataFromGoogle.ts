interface GoogleCredentials {
  sub: string;
  name: string;
  given_name: string;
  family_name: string;
  picture: string;
  locale: string;
  email: string;
}

async function getUserDataFromGoogle(access_token: string) {
  try {
    const response = await fetch(`https://www.googleapis.com/oauth2/v3/userinfo?access_token=${access_token}`);
    const data: GoogleCredentials = await response.json();
    return data;
  } catch (error) {
    console.error("Error al obtener datos del usuario:", error);
    throw new Error("Error al obtener datos del usuario");
  }
}

export default getUserDataFromGoogle;
