// reference type => object

const user: {
  readonly formName: string;
  company: "Programming hero"; //literal type
  firstName: string;
  middleName?: string; //optional type/chian
  lastName: string;
  isMarried: boolean;
} = {
  formName: "Informations",
  company: "Programming hero",
  firstName: "Mezbaul",
  middleName: "Abedin",
  lastName: "Persian",
  isMarried: true,
};

user.formName;
