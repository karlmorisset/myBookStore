export default function Login() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const credentials = {
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(credentials),
    };

    fetch("http://localhost:5003/auth/login", options);
  };

  return (
    <>
      <h1>Se connecter</h1>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="email">
          Email
          <input id="email" type="text" name="email" />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input id="password" type="text" name="password" />
        </label>

        <button type="submit">Se connecter</button>
      </form>
    </>
  );
}
