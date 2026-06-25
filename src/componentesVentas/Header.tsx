import  '../estilos/header.css'
type HeaderProps = {
  titulo: string;
};

export default function Header({titulo}:HeaderProps){
    return (
        <div className="ventas-header">
            <h1>{titulo}</h1>
        </div>
    )
}