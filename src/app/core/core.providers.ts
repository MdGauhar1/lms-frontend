import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { apiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
import { errorInterceptor } from './interceptors/error.interceptor';
import { loadingInterceptor } from './interceptors/loading.interceptor';
import { authInterceptor } from './interceptors/auth.interceptor';

export const CORE_PROVIDERS = [
  provideHttpClient(
    withInterceptors([
      apiPrefixInterceptor,
      authInterceptor,      // 👈 ADD HERE
      errorInterceptor,
      loadingInterceptor
    ])
  )
];




















// import { provideHttpClient, withInterceptors } from '@angular/common/http';
// import { apiPrefixInterceptor } from './interceptors/api-prefix.interceptor';
// import { errorInterceptor } from './interceptors/error.interceptor';
// import { loadingInterceptor } from './interceptors/loading.interceptor';

// export const CORE_PROVIDERS = [
//   provideHttpClient(
//     withInterceptors([
//       apiPrefixInterceptor,
//       errorInterceptor,
//       loadingInterceptor
//     ])
//   )
// ];
