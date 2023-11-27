import {Header} from '../Header';
import { Footer } from "../Footer";
import { Services } from "../Services";


export function DemoPage() {
    return (
        <>
            <Header />
            <main>
                <Services />
                <Services />
            </main>
            <Footer />
        </>
    );
}