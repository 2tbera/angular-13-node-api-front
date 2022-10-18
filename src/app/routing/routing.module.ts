import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { routes } from './routes';

const IMPORTS = [
    RouterModule.forRoot(routes)
];

const EXPORTS = [
    RouterModule
];

@NgModule({
    imports: IMPORTS,
    exports: EXPORTS
})
export class RoutingModule { }
