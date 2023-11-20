import { Header } from '../Header';
import { Footer } from "../Footer";
import { Services } from "../Services";


export function HomePage() {
    return (
        <>
            <Header />
            <main>
                <Services />
            </main>
            <Footer />
        </>
    );
}