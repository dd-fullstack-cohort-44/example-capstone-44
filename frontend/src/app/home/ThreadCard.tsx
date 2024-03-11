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
			<div className="card bg-neutral rounded-none border-white text-neutral-content">
				<div className="card-body">
					<div className="card-title">
						<Image className="mask mask-circle" src={profile.profileImageUrl} alt='profile photo'
						       width={50} height={50}/>
						<span className='text-lg'>{profile.profileName}</span>

					</div>
					{thread.threadContent}
					<div className="card-actions">
					</div>
				</div>
			</div>
		</>
	)
}