"use client";
import {Formik, FormikHelpers, FormikProps} from "formik";
import {toFormikValidationSchema} from "zod-formik-adapter";
import {FormDebugger} from "@/components/formDebugger";
import {DisplayError} from "@/components/displayError";
import {DisplayStatus} from "@/components/displayStatus";
import {SignIn, SignInSchema} from "@/utils/models/profile.model";
import {fetchPostSignIn} from "@/utils/http/profile.http";

export function SignInForm() {

	const initialValues : SignIn = {
		profileEmail: '',
		profilePassword: ''
	}

	const handleSubmit = (values: SignIn, actions: FormikHelpers<SignIn>) => {
		const {setStatus, resetForm} = actions
		fetch('/api/sign-in', {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(values)
		}).then(response => response.json()).then(json => {
			let type = 'alert alert-danger'
			if(json.status === 200) {
				resetForm()
				type = 'alert alert-success'
			}
			setStatus({type, message: json.message})
		})

	}

	return(
		<>
			<Formik
				initialValues={initialValues}
				onSubmit={handleSubmit}
				validationSchema={toFormikValidationSchema(SignInSchema)}
			>
				{SignInFormContent}
			</Formik>

		</>
	)
}


function SignInFormContent(props: FormikProps<SignIn>) {

	const {
		status,
		values,
		errors,
		touched,
		handleChange,
		handleBlur,
		handleSubmit,
		handleReset
	} = props;

	return(
		<>




			<form onSubmit={handleSubmit} className={"py-2 "}>
				<div className="fl pb-2">
					<label className="text-lg" htmlFor="profileEmail">email</label>
					<input
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.profileEmail}
						className="input input-bordered w-full max"
						type="text"
						name="profileEmail"
						id="profileEmail"
					/>
					<DisplayError errors={errors} touched={touched} field={"profileEmail"} />
				</div>
				<div className="">
					<label className={"text-lg"} htmlFor="password">Password</label>
					<input
						className="input input-bordered w-full"
						onBlur={handleBlur}
						onChange={handleChange}
						value={values.profilePassword}
						type="password"
						name="profilePassword"
						id="password"
					/>
					<DisplayError errors={errors} touched={touched} field={"profilePassword"} />
				</div>
				<div className="py-2 flex gap-2">
					<button className='btn btn-success' type="submit">Log In</button>
					<button className='btn btn-danger' onClick={handleReset} type="reset">reset</button>
				</div>
				<DisplayStatus status={status} />
			</form>
		</>
	)
}