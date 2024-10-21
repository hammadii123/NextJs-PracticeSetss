import Image from "next/image";
import Link from "next/link";





export default function Home() {
  return (

    <>

  
<nav className={` navbar`}>


  <ul>
    <Link href="/about"> <li>About</li></Link>
        
    <Link href="/blog"><li>Blog</li></Link>
    <Link href="/contact"><li>Contact</li></Link>
  </ul>
</nav>

    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">


      <h1>
     
      </h1>
     <h1 className="heading">This is my blog post</h1>

    <Image className="imgg" src={"/imgg.jpg"} alt="Wossup" width={200} height={400} />
     <p className="para1">Hello my name is Hammad Mustafa
     </p>
    </div>
    </>
  );
}
