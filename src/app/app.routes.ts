import { Routes } from '@angular/router';
import { Home } from './home/home';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        title: 'मां जगजननी',
        component:Home
    },
    {
        path:'calendar',
        title:'पंचांग',
        loadComponent: () => import('./calendar/calendar').then(m => m.Calendar)
    },
    {
        path:'aarti',
        title:'आरती',
        loadComponent: () => import('./aarti/aarti').then(m => m.Aarti)
    },
    {
        path:'leaders',
        title:'हमारे विभूति',
        loadComponent: () => import('./our-leader/our-leader').then(m => m.OurLeader)
    },
    {
        path:'useful-mantra',
        title:'उपयोगी मंत्र',
        loadComponent: () => import('./usful-mantra/usful-mantra').then(m => m.UsfulMantra)
    },
    {
        path:'**',
        redirectTo:'home'
    }
];
