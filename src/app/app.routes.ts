import { Routes } from '@angular/router';
import path from 'node:path';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () =>
      import('../app/features/layaout/pages/main/main.component').then(
        (m) => m.MainComponent
      ),
  },
  {
    path: 'planes',
    loadComponent: () =>
      import('../app/features/plan-category/plan-category.component').then(
        (p) => p.PlanCategoryComponent
      ),
    children: [
        {
            path: '',
            loadComponent: () =>
              import(
                '../app/features/plan-category/pages/plan-list/plan-list.component'
              ).then((p) => p.PlanListComponent),
          },
      {
        path: 'detalles',
        loadComponent: () =>
          import(
            '../app/features/plan-category/pages/plan-details/plan-details.component'
          ).then((p) => p.PlanDetailsComponent),
      },
    ],
  },
  {
    path: 'politicas_reserva',
    loadComponent: () =>
      import(
        '../app/features/reservation-policies/reservation-policies.component'
      ).then((p) => p.ReservationPoliciesComponent),
  },
  {
    path: 'galeria',
    loadComponent: () =>
      import(
        '../app/features/galery/galery.component'
      ).then((p) => p.GaleryComponent),
  }
];
