import "./layout.css";

type LayoutProps = {
    children: React.ReactNode;
};

export default function Layout({ children }: LayoutProps){

    return(

        <div className="layout">

            <main className="container">

                {children}

            </main>

        </div>

    );

}