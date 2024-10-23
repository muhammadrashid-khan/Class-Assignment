import Navbar from '../components/navbar';

export default async function RO(){ 
    await new Promise(
        (resolve)=>{
            setTimeout(resolve,2000);
        }
    );
    return (
        <div>
            <Navbar />
            <h1 className= "bg-lime-200 font-serif text-3xl font-bold text-center text-indigo-600"> Welcome to RO Plant</h1>
            <p className="font-bold text-zinc-600">Here, we fulfill water demand of facility, mainly Dyeing consuming upto 75% soft water. We have a capacity to produce upto 500,000 Imp Gallon soft high quality RO Water by our plant. Our aim is to minimize foot print by optimum recycling treated waste water in RO Plants and thus reducing reject water to make our environment green.
            </p>
        </div>
    )
}