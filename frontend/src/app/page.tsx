import Image from 'next/image'
import {SignInForm} from "@/app/SignInForm";

export default function() {
  return (
    <>

      <main className="hero min-h-screen py border-rounded" >
        <div className="hero-content border-2 rounded-2xl border-neutral-content flex bg-neutral gap-2   border-roun flex-col md:flex-row">
          <Image className="basis-1/2" src={"/login-hero.jpg"} alt="person holding phone staring at twitter login page Photo by Akshar Dave🌻 on Unsplash" width={300} height={450}></Image>
          <div className={"m-0 basis-1/2"}>
            <h1 className="text-3xl font-bold">Login</h1>
            <SignInForm />
          </div>
        </div>
      </main>
    </>

  )
}
