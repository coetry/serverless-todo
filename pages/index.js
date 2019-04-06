import Link from "next/link";
import Header from "../components/header";

function Index() {
  return (
    <main>
      <Header />
      <section>
        <Link href="/about">
          <a>Go to About Me</a>
        </Link>
      </section>
      <style jsx global>{`
        a,
        a:visited {
          text-decoration: none;
          color: inherit;
          font-size: 16px;
          font-weight: 600;
        }
      `}</style>
    </main>
  );
}

export default Index;
