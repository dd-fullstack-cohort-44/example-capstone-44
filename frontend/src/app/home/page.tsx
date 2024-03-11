'use server'
import Image from "next/image";
import {Profile} from "@/utils/models/profile.model";
import {Thread} from "@/utils/models/thread.model";
import {fetchAllThreads} from "@/utils/http/thread.http";
import {fetchProfileByProfileId} from "@/utils/http/profile.http";
import {ThreadCard} from "@/app/home/ThreadCard";


export default async function () {
	const {threads, profiles} =  await getData()
	console.log(threads)
	console.log(profiles)


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
					{threads.map((thread: Thread) => <ThreadCard profile={profiles[thread.threadProfileId]} thread={thread} /> )}
				</div>
			</main>

		</>
	)
}


async function getData(): Promise<{profiles:{[profileId: string ]: Profile} , threads: Thread[]}> {
	const threads = await fetchAllThreads()
	let profiles : {[profileId: string ]: Profile} = {}

	for(let thread of threads) {
		profiles[thread.threadProfileId] = await fetchProfileByProfileId(thread.threadProfileId)
	}

	return {profiles, threads}



}