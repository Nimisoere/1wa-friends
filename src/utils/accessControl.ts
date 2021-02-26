export const checkPermissions = (
  userPermissions: string[],
  allowedPermissions: string[]
): boolean => {
  if (allowedPermissions && allowedPermissions.length === 0) {
    return true;
  }
  return (
    userPermissions &&
    userPermissions.some(
      (permission) =>
        allowedPermissions && allowedPermissions.includes(permission)
    )
  );
};

export const accessControlFn = (
  userPermissions: string[],
  allowedPermissions: string[],
  fn: Function,
  ...args: any
): boolean => {
  const permitted = checkPermissions(userPermissions, allowedPermissions);
  if (permitted) {
    fn(...args);
    return true;
  }
  return false;
};
