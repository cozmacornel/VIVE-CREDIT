export interface Permission {
  id: string;
  resource: string;
  action: string;
  description?: string;
}

export interface Role {
  id: string;
  name: string;
  description: string;
  permissions: Permission[];
  createdAt?: string;
  updatedAt?: string;
}

export interface User {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: Role;
  createdAt?: string;
  updatedAt?: string;
}
