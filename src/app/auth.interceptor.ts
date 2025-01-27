import { HttpInterceptorFn } from '@angular/common/http';
import { Inject } from '@angular/core';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('jwt');
  const router = Inject(Router);

  if (!token) {
    router.navigate(['/user/signup']);
    return next(req);
  }

  const clonedRequest = req.clone({
    setHeaders: {
      authorization: `Bearer ${token}`,
    },
  });

  return next(clonedRequest);
};
