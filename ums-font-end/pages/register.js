
import Link from "next/link";

export default function Register() {
  return (
    <>
      <h2>Sing In</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label htmlFor="password">Password</label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" />
        </div>
        <div>
          <label htmlFor="address">Address</label>
          <input type="text" name="address" id="address" />
        </div>
        <div>
          <label htmlFor="program">Program</label>
          <input type="text" name="program" id="program" />
        </div>
        <div>
          <label htmlFor="dob">Date of Birth</label>
          <input type="date" name="dob" id="dob" />
        </div>
        <div>
          <label htmlFor="salary">Salary</label>
          <input type="number" name="salary" id="salary" />
        </div>
        <button type="submit">Sign Up</button>
      </form>
      <a href="login">
        <button>Sing In</button>
      </a>
      <Link href="login">Sing In</Link>
    </>
  );
}
