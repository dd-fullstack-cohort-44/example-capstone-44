'use server'

import {Thread, ThreadSchema} from "@/utils/models/thread.model";

export async function fetchAllThreads() : Promise<Thread[]> {
	const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/thread`).then((response: Response) => {
		if(!response.ok) {
			throw new Error('Error fetching threads')
		} else {
			return response.json()
		}
	})

	return ThreadSchema.array().parse(data)


}