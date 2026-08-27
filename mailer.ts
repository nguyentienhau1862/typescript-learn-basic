interface ISendEmailResponse {
	email: string;
	subject: string;
	content: string;
};

export function sendEmail(email: string, subject: string, content: string): ISendEmailResponse {
	return { email, subject, content };
}
