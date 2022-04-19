type User = {
  permissions: string[];
  roles: string[];
}


type ValidateUserPermissionsParams = {
  user: User;
  permissions?: string[];
  roles?: string[];
}

export const validateUserPermissions = ({user, permissions, roles}: ValidateUserPermissionsParams) => {
  if (permissions?.length > 0) {
    const hasAllPermissions = permissions.every((permission) => {
      return user.permissions.includes(permission);
    });

    if (!hasAllPermissions) {
      return false;
    }
  }

  if (roles?.length > 0) {
    const hasSomeRoles = roles.some((role) => {
      return user.roles.includes(role);
    });

    if (!hasSomeRoles) {
      return false;
    }
  }

  return true;
};