export default function Login() {
  return (
    <>
      <h2>Sing Up</h2>
      <form>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <Link href="student/homepage"> <button type="submit">Login</button> </Link>
      </form>
      <a href="register">
        <button>Sing Up</button>
      </a>
    </>
  );
}
