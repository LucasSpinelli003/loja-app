import Link from "next/link";
import Image from "next/image";


export default function Post(){
    return(
        <div>
            <h1>Meu primeiro POST</h1>
            <div>
                <p><Link href="/">--Voltar</Link></p>
                <div>
                    <figure>
                        <Image src="/public/img/th.jpg" alt="logo" width={350} height={200}/>
                    </figure>
                </div>
            </div>
        </div>
    )
}