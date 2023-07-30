import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
    ResolversGuardsRoutingComponent,
} from './resolvers-guards-routing.component';
import { ResolverComponent } from './resolver.component';
import { GuardComponent } from './guard.component';
import { ResolverGuardComponent } from './resolver-guard.component';
import {
    NotGuardedOrResolvedComponent,
} from './not-guarded-or-resolved.component';

const routes: Routes = [
    {
        // guarded
        path: '',
        component: GuardComponent,
        children: [
            {
                // resolved
                path: '',
                component: ResolverComponent,
            },
            {
                // guarded and resolved
                path: 'resolved-and-guarded',
                component: ResolverGuardComponent,
            },
            {
                // not guarded or resolved
                path: 'not-guarded-or-resolved',
                component: NotGuardedOrResolvedComponent,
            }
        ],
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    declarations: [ResolversGuardsRoutingComponent, ResolverComponent, GuardComponent, ResolverGuardComponent, NotGuardedOrResolvedComponent],
})
export class ResolversGuardsModule {
}
