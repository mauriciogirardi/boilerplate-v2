import Image from 'next/image'

export function Main() {
  return (
    <div className="flex flex-col justify-center items-center">
      <header className="flex items-center gap-2">
        <Image
          src="/public/icon-192.png"
          alt="Uma logo do react rosa"
          width={100}
          height={100}
          className="text-zinc-500"
        />
        <h1 className="text-zinc-100 font-semibold text-2xl">Boilerplate V2</h1>
      </header>
      <span className="text-zinc-300 mb-6">
        boilerplate created with NextJS, App Router, Storybook, Jest, Husky
      </span>
      <Image
        src="/public/hero-illustration.png"
        alt="Home sentado de frente para o computador com código"
        width={200}
        height={200}
        className="text-zinc-500"
      />
    </div>
  )
}
