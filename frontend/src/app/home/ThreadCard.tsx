'use client'

import {Profile} from "@/utils/models/profile.model";
import {Thread} from "@/utils/models/thread.model";
import Image from "next/image";

type Props = {
	profile: Profile,
	thread: Thread
}

export function ThreadCard(props: Props){
	const {profile, thread} = props
	return(

		<>
			<div className="col-span-full border border-base-content">
				<div className="card bg-neutral rounded-none border-white text-neutral-content">
					<div className="card-body">
						<div className="card-title">
							<ProfileAvatarImage profileImageUrl={profile.profileImageUrl}/>
							<span className='text-lg'>{profile.profileName}</span>

						</div>
						{thread.threadContent}
						<div className="card-actions">
						</div>
					</div>
				</div>
			</div>
		</>
)
}



type ProfileAvatarImageProps = {
	profileImageUrl: string|null
}
function ProfileAvatarImage (props: ProfileAvatarImageProps) {
	const {profileImageUrl} = props
	if (profileImageUrl) {
		return (
			<img className={'mask mask-circle'} src={profileImageUrl} alt="profile image" width={50} height={50}/>
		)
	} else {
		return <></>
	}

}