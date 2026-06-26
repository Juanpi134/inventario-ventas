import  '../estilos/header.css'
type HeaderProps = {
    appName: string;
    titulo: string;
}

export default function Header({appName,titulo}:HeaderProps){
    return (
        <header className="header">

            <h1>{appName}</h1>

            <h2>{titulo}</h2>

        </header>
    )
}