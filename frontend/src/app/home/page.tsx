"use server"
import Image from "next/image";


export default async function () {
	return (
		<>
			<main className="container lg:w-2/3 grid pt-5 mx-auto">
				<div className="col-span-full p-0 border border-base-content">
					<h1 className="text-3x p-4 font-bold">Home</h1>
					<form className={"px-4"}>
						<div className="form-control">
							<label className="text-lg pb-3" htmlFor="tweetContent">tweet</label>
							<textarea className="textarea textarea-bordered" name="tweetContent" id="tweetContent"
							          cols={30} rows={3}></textarea>
						</div>
						<div className="form-control">
							<button type="submit" className="btn btn-accent">
								Submit
							</button>
						</div>
					</form>
				</div>
				<div className="col-span-full border border-base-content">
					<div className="card bg-neutral rounded-none border-white text-neutral-content">
						<div className="card-body">
							<div className="card-title">
								<Image className="mask mask-circle" src="/profile-photo.jpeg" alt='profile photo'
								       width={50} height={50}/>
								<span className='text-lg'>Handle</span>

							</div>
							Digging into Angular — the framework that turns your app ideas into reality with ease!
							#AngularMagic
							<div className="card-actions">
							</div>
						</div>
					</div>
				</div>
			</main>

		</>
	)
}