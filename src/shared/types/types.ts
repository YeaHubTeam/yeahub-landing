export interface GetLoginError {
	error: {
		status: number;
		data: {
			message: string;
			statusCode: number;
		};
	};
}
