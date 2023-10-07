import Link from "next/link"

export default function Home(){
  return(
    <div>
      <h1>Home</h1>
      <div>
        <p><Link href="/posts">---Posts---</Link></p>
        <p><Link href="/posts/post1">Post - 1...</Link></p>
        <p><Link href="/posts/post2">Post - 2...</Link></p>
        <p><Link href="/posts/post3">Post - 3...</Link></p>
      </div>  
    </div>
  )
}