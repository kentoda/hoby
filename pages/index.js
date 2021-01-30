import Head from "next/head";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex justify-center">
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Link href="/signup">
        <a>SignUpページ</a>
      </Link>

      <div className="mt-4 p-4 w-1/4 rounded bg-red-800 text-center">
        <p className="text-blue-300">この要素は赤です</p>
      </div>
    </div>
  );
}
