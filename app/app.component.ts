import {Component} from 'angular2/core'
import { HTTP_PROVIDERS } from 'angular2/http'
import 'rxjs/Rx'
import { ROUTER_PROVIDERS, RouteConfig, RouterLink,ROUTER_DIRECTIVES,APP_BASE_HREF,LocationStrategy,RouteParams,ROUTER_BINDINGS } from 'angular2/router'

import {ProductListComponent} from './products/product-list.component' //ProductDetailComponent
import { ProductService } from './products/product.service'
import {WelcomeComponent} from './home/welcome.component'
import {ProductDetailComponent} from './products/product-detail.component'

@Component({
    selector:'pm-app',
    template:`
        <div>
        <nav class='navbar navbar-default'>
            <div class='container-fluid'>
                <a class='navbar-brand'>{{pageTitle}}</a>
                <ul class='nav navbar-nav'>
                    <li><a [routerLink]="['Welcome']">Home</a></li>
                    <li><a [routerLink]="['Products']">Product List</a></li>
                </ul>
            </div>
        </nav>
        <div class='container' style="width: 100% !important;">
            <router-outlet></router-outlet>
        </div>
     </div>
    `,
    directives:[RouterLink,ROUTER_DIRECTIVES],
    providers: [ProductService,
                HTTP_PROVIDERS,
                ROUTER_PROVIDERS]
})
@RouteConfig([
    { path:'/welcome', name:'Welcome', component : WelcomeComponent, useAsDefault :true},
    { path:'/products', name:'Products', component : ProductListComponent },
    { path:'/product/:id', name:'ProductDetail', component : ProductDetailComponent }
])
export class AppComponent {
    pageTitle : string = 'Acme Product Management';    
}