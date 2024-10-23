import Navbar from '../components/navbar';
// Main Page of App Folder
export default function Laboratory() {
  return (
<div>
  <Navbar />
<h1 className ="font-sans font-extrabold text-3xl text-center text-blue-500 bg-emerald-100">LABORATORY</h1>
<p className="text-slate-600 font-semibold italic">A quality test is essential for any exporting firm to ensure customer satisfaction. <br/>
  From Raw yarn to finished fabric, a series of quality test is conducted to maintain promising quality, not only that from chemicals to waste water to RO Product
  Following tests have been conducted on a daily basis:
  <li>Color fastness</li>
  <li>Fabric Content</li>
  <li>Fabric Shades CMC</li>
  <li>Water Analysis</li>
  </p>
</div>
  );
}