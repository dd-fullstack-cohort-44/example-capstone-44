'use server'


import {Profile, ProfileSchema} from "@/utils/models/profile.model";

export async function fetchProfileByProfileId(profileId: string) : Promise<Profile> {
	const {data} = await fetch(`${process.env.PUBLIC_API_URL}/apis/profile/${profileId}`).then(response => {
		if(!response.ok) {
			throw new Error(`error fetching profile with the profile id of ${profileId}`)
		} else {
			return response.json()
		}
	})

	return ProfileSchema.parse(data)
}