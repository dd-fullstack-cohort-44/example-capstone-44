export interface BackendStatus {
	status: number
	data: any
	message: string | null
}

export interface Status extends BackendStatus {
	type: 'alert alert-success' | 'alert alert-danger'
}
