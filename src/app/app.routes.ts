import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path:"",
        loadComponent: () => import('../app/features/layaout/pages/main/main.component')
        .then(m => m.MainComponent)
    },
    {
        path:"planes",
        loadComponent: () => import('../app/features/plan-category/plan-category.component')
        .then(p => p.PlanCategoryComponent)
    },
    {
        path:"politicas_reserva",
        loadComponent: () => import('../app/features/reservation-policies/reservation-policies.component')
        .then(p => p.ReservationPoliciesComponent)
    }
];
