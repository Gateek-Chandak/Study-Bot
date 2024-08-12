import Link from "next/link";

export default function Home() {

  return (
    <div className="m-5">
      <Link href="/home" className="bg-black text-white m-5 p-2 rounded-lg">Get Started</Link>
    </div>
  );
}
