
import { UserInterface } from '@shared/interface/user.interface';

export class User {
	private user: UserInterface;

	constructor(user: UserInterface) {
		this.user = user;
	}

	get(): UserInterface {
		return this.user;
	}

	getImage(): {thumbnail: string, full: string} {
		if (this.user.profileImg) {
			return this.user.profileImg;
		}
		return {thumbnail: '/asset/default.jpeg', full: '/asset/default.jpeg'};
	}
}