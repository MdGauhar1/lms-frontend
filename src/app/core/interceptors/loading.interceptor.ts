import { HttpInterceptorFn } from '@angular/common/http';
import { finalize } from 'rxjs';

let activeRequests = 0;

export const loadingInterceptor: HttpInterceptorFn = (req, next) => {
  activeRequests++;
  console.log('Loading started');

  return next(req).pipe(
    finalize(() => {
      activeRequests--;
      if (activeRequests === 0) {
        console.log('Loading finished');
      }
    })
  );
};
