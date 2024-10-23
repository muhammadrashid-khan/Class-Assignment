import Link from 'next/link';
export default function Navbar(){
    return (
        <div className='flex flex-row...'>
            <br />
            <Link href='/' className='ml-2 p-1.5 rounded-lg bg-lime-400 text-blue-900 font-bold'>Home</Link>
            <br />
            <Link href='/dyeing' className='ml-2 p-1.5 rounded-lg bg-lime-400 text-blue-900 font-bold'>Dyeing</Link>
            <br />
            <Link href='/knitting' className='ml-2 p-1.5 rounded-lg bg-lime-400 text-blue-900 font-bold'>Knitting</Link>
            <br />
            <Link href='/laboratory' className='ml-2 p-1.5 rounded-lg bg-lime-400 text-blue-900 font-bold'>Laboratory</Link>
            <br />
            <Link href='/ro' className='ml-2 p-1.5 rounded-lg bg-lime-400 text-blue-900 font-bold'>RO</Link>
            <br />
        </div>
    )
}