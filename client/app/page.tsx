import Link from "next/link";

export default function Home() {

  return (
    <div className="m-5">
      <Link href="/study-bot" className="bg-black text-white m-5 p-2 rounded-lg">Study-Bot</Link>
      <Link href="/docu-bot" className="bg-black text-white m-5 p-2 rounded-lg">Docu-Bot</Link>
    </div>
  );
}
