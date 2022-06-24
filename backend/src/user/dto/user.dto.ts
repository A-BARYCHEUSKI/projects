export class CreateUserDto {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
  password: string;
  is_agree: boolean
}

export class ShowUserDto {
  first_name: string;
  last_name: string;
  email: string;
  phone_number: string;
}
