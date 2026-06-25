type HeaderProps = {
  titulo: string;
};
export default function Header({titulo}:HeaderProps){
    return (
        <div className="header">
            <h1>{titulo}</h1>
        </div>
    )
}