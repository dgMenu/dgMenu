import Image from "next/image";

export default function Header() {
  return (
    <>
      <header id="header">
        <div className="box flex justify-between py-5">
          <a href="#">
            <Image
              src="/img/logo-white.svg"
              alt="dgMenu"
              height={32}
              width={200}
              className="h-6 lg:h-8"
            />
          </a>
        </div>
      </header>
    </>
  );
}
