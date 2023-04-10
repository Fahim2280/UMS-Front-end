import Link from "next/link";
import MyLayout from "./layout";
export default function feedback() {
  return (
    <>
    <MyLayout></MyLayout>
      <h2>give feedback</h2>
      <form>
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" />
        </div>
        <div>
          <label htmlFor="feedback">feedback</label>
          <input type="text" name="feedback" id="feedback" />
        </div>
      
       <Link href="homepage"> <button type="submit">Done</button></Link>
      </form>
    </>
  );
}
