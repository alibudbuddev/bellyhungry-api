export interface UserInterface {
	balance: string;
  picture: string;
  age: number;
  name: string;
  gender: string;
  company: string;
  email: string;
  profileImg?: {thumbnail: string, full: string}
}