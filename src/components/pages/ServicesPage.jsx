import { Services } from "../sections/Services";
import { Header } from "../sections/Header";
import { Footer } from "../sections/Footer";


export function ServicesPage() {
    return (
        <>
            <Header />
            <main>
                <Services sortBy="price90" />
            </main>
            <Footer />
        </>
    )
}