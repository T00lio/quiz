import fetch from "node-fetch";

const clientId = process.env.GITHUB_CLIENT_ID;
const clientSecret = process.env.GITHUB_CLIENT_SECRET;

async function getUserDataFromGithub({ code }: { code: string }) {
  console.log("code", code);

  const githubToken: any = await fetch(
    `https://github.com/login/oauth/access_token?client_id=${clientId}&client_secret=${clientSecret}&code=${code}`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    }
  )
    .then((res: any) => res.json())
    .catch((err: any) => {
      throw new Error("Error al obtener el token de Github");
    });
  console.log("githubToken", githubToken);

  const accessToken = githubToken.access_token;
  console.log("accessToken", accessToken);
  return fetch(`https://api.github.com/user`, {
    headers: {
      Authorization: `token ${accessToken}`,
    },
  });
}

export default getUserDataFromGithub;
