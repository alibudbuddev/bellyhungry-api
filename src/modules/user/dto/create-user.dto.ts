export default class CreateUserDto {
	name: {
		first: string,
    middle?: string,
    last?: string
	};
	email: string
}