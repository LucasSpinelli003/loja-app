import Link from "next/link";

export default function Post(){
    return(
        <div>
            <h1>Meus primeiro POST</h1>
            <div>
                <p><Link href="/">--Voltar</Link></p>
            </div>
        </div>
    )
}