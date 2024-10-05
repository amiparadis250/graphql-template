interface UserLogged {
  id: string;
  createdAt: string;
  firstname: string;
  lastname: string;
  code: string;
  email: string;
  role: Role;
  picture: string;
  country: string;
  gender: string;
  telephone: string;
  password: string;
  token: string;
  isActive: boolean;
}

interface Role {
  _id: string;
  roleName: string;
  description: string;
  permissions: Permission[];
}

interface Permission {
  _id: string;
  permissionName: string;
}

interface UserInputLogged {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  code: string;
  telephone: string;
  gender: string;
  country: string;
  role: string;
}

interface EditUserInputLogged {
  firstname?: string;
  lastname?: string;
}

export const userResolvers = {
  Query: {
    
  },
  Mutation: {
    
  }
};
