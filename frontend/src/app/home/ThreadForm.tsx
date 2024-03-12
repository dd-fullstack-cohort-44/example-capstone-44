'use client'
import {ThreadSchema} from "@/utils/models/thread.model";
import {z} from "zod";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {DisplayError} from "@/components/displayError";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {Session} from "@/utils/fetchSession";
import React from "react";
import {useRouter} from "next/navigation";





type ThreadFormProps = {
	session : Session|undefined
}
export function ThreadForm(props : ThreadFormProps) {
	const router = useRouter()

	const {session} = props

	if(session === undefined) {
		return <></>
	}



	const {profile, authorization} = session

	const initialValues = {
		threadContent: "",
		images: ""
	};



	const formSchema = ThreadSchema.pick({threadContent: true})
	type  Values = z.infer<typeof formSchema>

	const handleSubmit = (values: Values, actions: FormikHelpers<any>) => {
		const thread = {threadProfileId:profile.profileId, "threadId": null, "threadReplyThreadId": null, "threadContent":values.threadContent, "threadDatetime":null, "threadImageUrl": null}
		const {setStatus, resetForm} = actions
		fetch('/apis/thread', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				"authorization": `${authorization}`
			},
			body: JSON.stringify(thread)
		}).then(response => response.json()).then(json => {
			if (json.status === 200) {
				resetForm()
				router.refresh()
			}
			setStatus({type: json.type, message: json.message})
		})
	};

	return (
		<>
			<div className="col-span-full p-0 border border-base-content">
				<h2 className="text-3x p-4 font-bold">Hello {profile.profileName} What is going on today? </h2>
				<Formik initialValues={initialValues}
				        onSubmit={handleSubmit}
				        validationSchema={toFormikValidationSchema(formSchema)}>
					{ThreadFormContent}
				</Formik>
			</div>

		</>
	)
}


function ThreadFormContent(props: any) {

	const {
		status,
		values,
		errors,
		touched,
		dirty,
		isSubmitting,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset
	} = props;


	return (
		<>
			<form className={"px-4 min-width-50"} onSubmit={handleSubmit}>
				<div className="form-control min-width-50 ">
					<label className="text-sm pb-3 sr-only" htmlFor="tweetContent">Thread Content Goes Here</label>
					<textarea
						value={values.threadContent}
						onBlur={handleBlur}
						onChange={handleChange}
						className="textarea textarea-bordered"
						name="threadContent"
						id="tweetContent"
						cols={30}
						rows={3}
					>
					</textarea>
				</div>
				<DisplayError errors={errors} touched={touched} field={"threadContent"}/>
				<div className="form-control">
					<button type="submit" className="btn btn-accent">
						Submit
					</button>
				</div>
			</form>
		</>
	)
}

