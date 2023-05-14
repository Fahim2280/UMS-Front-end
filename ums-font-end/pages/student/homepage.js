import MyLayout from "./layout";
import Session from "./session";
import SessionCheck from "./sessioncheck";
export default function homepage() {
    return (
      <>
      <SessionCheck>
            <MyLayout/>

        <h1>Home</h1>

      <h1>About</h1>
      <h3>About the orgnaization</h3>
      </SessionCheck>
      <Session></Session>
      </>
    )
  }