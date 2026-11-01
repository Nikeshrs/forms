import { Routes } from '@angular/router';
import { Form } from './features/form/form';
import { Taskbar } from './taskbar/taskbar';
import { Second } from './features/second/second';
import { Url } from './features/url/url';

export const routes: Routes = [
    {path:'',component:Taskbar},
    {path:'first',component:Form},
    {path:'second',component:Second},
    {path:'url/:id',component:Url}
];
