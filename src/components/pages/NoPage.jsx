import { Header } from '../sections/Header';
import { Footer } from "../sections/Footer";
import ufo from "../../assets/ufoBeFono.png"



export function NoPage() {
    return (
        <>
            <Header />
            <main>
               <section className = "container" >
                <div>
                    <div>
                        <h1> 404 </h1>
                            <h2>  Page not found</h2>
                       
                    </div>
                    <div>
                        <img src={ufo} style="width: 200px" alt="UFO"/>
                        
                    </div>
                </div>
               </section>
            </main>
            <Footer />
        </>
    );
}