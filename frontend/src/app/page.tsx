import Image from 'next/image'

export default function() {
  return (
    <>

      <main className="hero min-h-screen py border-rounded" >
        <div className="hero-content border-2 rounded-2xl border-neutral-content flex bg-neutral gap-10  border-roun flex-col md:flex-row">
          <Image className="flex-grow" src={"/login-hero.jpg"} alt="person holding phone staring at twitter login page Photo by Akshar Dave🌻 on Unsplash" width={200} height={300}></Image>
          <div className={""}>
            <h1 className="text-3xl font-bold">Login</h1>
            <form className={"py-2"}>
              <div className="pb-2">
                <label className="text-md" htmlFor="username">Username</label>
                <input
                  className="input input-bordered w-full max"
                  type="text"
                  name="username"
                  id="username"
                />
              </div>
              <div className="pb-2">
                <label  htmlFor="password">Password</label>
                <input
                  className="input input-bordered w-full max"
                  type="password"
                  name="password"
                  id="password"
                />
              </div>
              <div className="pb-4 flex gap-2">
                <button className='btn btn-success' type="submit">Log In</button>
                <button className='btn btn-danger' type="reset">reset</button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </>

  )
}
