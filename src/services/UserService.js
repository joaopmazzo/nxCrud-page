export async function getAllUsers() {
  const response = await fetch(
    // "http://nxcrud-env-1.eba-wibdthr9.sa-east-1.elasticbeanstalk.com/api/v1/user"
    "http://localhost:8080/api/v1/user"
  );
  return await response.json();
}

export async function createUser(data) {
  const response = await fetch(
    // "http://nxcrud-env-1.eba-wibdthr9.sa-east-1.elasticbeanstalk.com/api/v1/user",
    "http://localhost:8080/api/v1/user",
    {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: {
        data,
      },
    }
  );
  return await response.json;
}
