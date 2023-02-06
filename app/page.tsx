import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className=" p-10">
        <Link href={"/"} className="bg-pink-500 rounded-lg p-4">
          Hello
        </Link>
      </div>
    </main>
  );
}
