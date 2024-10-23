import Navbar from './components/navbar';
// Main Page of App Folder
export default function Home() {
  return (
<div>
  <Navbar />
<h1 className ="font-sans font-extrabold text-3xl text-center text-red-100 bg-purple-400">MY WORK PLACE</h1>
<p className="text-slate-600 font-semibold italic">lets visit some of its departments. <br/>
  Following are the list of departments:
  <li>Dyeing</li>
  <li>Knitting</li>
  <li>Water Treatment</li>
  <li>Laboratory</li>
  </p>
</div>
  );
}
