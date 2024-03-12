import {z} from 'zod'

export const ProfileSchema = z.object({
	profileId: z.string({
		required_error: 'profileId is required',
		invalid_type_error: 'Please provide a valid profileId'
	})
		.uuid({message: 'please provide a valid profileId'}),
	profileAbout: z.string({
		required_error: 'profile about is a required field.',
		invalid_type_error: 'please provide a valid profile about'
	})
		.max(512, {message: 'profile about length is to long'})
		.nullable(),


	profileImageUrl: z.string({
		required_error: 'profileImage is required',
		invalid_type_error: 'please provide a valid profileImageUrl'
	})
		.trim()
		.url({message: 'please provide a valid profile image url'})
		.max(255, {message: 'profile image url is to long'})
		.nullable(),
	profileName: z.string()
		.trim()
		.min(1, {message: 'please provide a valid profile name (min 1 characters)'})
		.max(32, {message: 'please provide a valid profile name (max 32 characters)'})
})

export const SignInSchema = z.object({
	profilePassword: z
		.string({required_error: "profile password is required", invalid_type_error: "please provide a valid  password"})
		.min(8, {message: 'please provide a valid password (min 8 characters)'})
		.max(32, {message: 'please provide a valid password (max 32 characters)'}),
	profileEmail: z
		.string({required_error: "profileEmail is required", invalid_type_error: "please provide a valid profile email"})
		.email({message: 'please provide a valid email'})
		.max(128, {message: 'please provide a valid email (max 128 characters)'})
})

export const SignUpSchema = ProfileSchema
	.merge(SignInSchema)
	.extend({
		profilePasswordConfirm: z
			.string({required_error: "profile password is required", invalid_type_error: "please provide a valid  password"})
			.min(8, {message: 'please provide a valid password (min 8 characters)'})
			.max(32, {message: 'please provide a valid password (max 32 characters)'})
	})
	.refine(data => data.profilePassword === data.profilePasswordConfirm, {
		message: 'passwords do not match'
	})



export type Profile = z.infer<typeof ProfileSchema>
export type SignIn = z.infer<typeof SignInSchema>
export type SignUp = z.infer<typeof SignUpSchema>
