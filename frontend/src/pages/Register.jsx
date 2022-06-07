export default function Register() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const user = {
      firstname: e.target.elements.firstname.value,
      lastname: e.target.elements.lastname.value,
      email: e.target.elements.email.value,
      password: e.target.elements.password.value,
    };

    const options = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(user),
    };

    fetch("http://localhost:5002/auth/signup", options);
  };

  return (
    <>
      <h1>Ajouter un utilisateur</h1>
      <form action="" method="POST" onSubmit={handleSubmit}>
        <label htmlFor="firstname">
          Prénom
          <input id="firstname" type="text" name="firstname" />
        </label>
        <label htmlFor="lastname">
          Nom
          <input id="lastname" type="text" name="lastname" />
        </label>
        <label htmlFor="email">
          Email
          <input id="email" type="text" name="email" />
        </label>
        <label htmlFor="password">
          Mot de passe
          <input id="password" type="text" name="password" />
        </label>

        <button type="submit">Créer un utilisateur</button>
      </form>
    </>
  );
}