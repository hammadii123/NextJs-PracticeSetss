import Image from "next/image";
import Link from "next/link";
import styles1 from "./hello1.css"
import styles2 from "./hello2.css"
import Dummy from "../components/dummy"

import "../styles/styles.css"

export default function Home() {
  return (

    <>

  
<nav className={`${styles1.navbar} navbar`}>


  <ul>
    <Link href="/about"> <li>About</li></Link>
        
    <Link href="/blog"><li>Blog</li></Link>
    <Link href="/contact"><li>Contact</li></Link>
  </ul>
</nav>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


      <h1>
      <Dummy/>
      </h1>
     <h1 className="heading">This is my blog post</h1>
     <p>Hello my name is Hammad Mustafa
     </p>
    </div>
    </>
  );
}
