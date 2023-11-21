import { Header } from '../sections/Header';
import { Footer } from "../sections/Footer";
import { Services } from "../sections/Services";


export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Services limit={3} />
            </main>
            <Footer />
        </>
    );
}