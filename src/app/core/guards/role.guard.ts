import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';

export const roleGuard: CanActivateFn = (route) => {
  const router = inject(Router);
  const role = localStorage.getItem('role');
  const roles = route.data?.['roles'] as string[];

  if (!role) {
    router.navigate(['/login']);
    return false;
  }

  if (!roles.includes(role)) {
    router.navigate(['/login']);
    return false;
  }

  return true;
};