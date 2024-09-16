import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptor: HttpInterceptorFn = (req, next) => {
  debugger;
  const token = localStorage.getItem('angular18Token');
  const cloneReq = req.clone({
    setHeaders: {
      Authorization: `Bearer ${token}`, // Ters tırnaklarla kullanılıyor
    },
  });
  return next(cloneReq);
};
