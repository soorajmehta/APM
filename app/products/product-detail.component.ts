import {Component,OnInit} from 'angular2/core'
import { RouteParams, Router } from 'angular2/router'
import { IProduct } from './product'
import { ProductService } from './product.service'
import { StarComponent } from '../shared/star.component';

@Component({
    selector:'product-detail',
    templateUrl:'app/products/product-detail.component.html',
    directives: [StarComponent]
        
})
export class ProductDetailComponent implements OnInit{    
    pageTitle : string = "Product Details"; 
    product: IProduct;
    errorMessage : string;
    
    constructor(private _routeParams : RouteParams, 
                private _router : Router,
                private _productService: ProductService){
         
    }    
    
    ngOnInit(){   
        if (!this.product) {
            let id = +this._routeParams.get('id');      
            this.getProduct(id)
        }
    }
    
    onBack(): void{
        this._router.navigate(['Products']);          
   }
   
   getProduct(id: number) {
        this._productService.getProduct(id)
            .subscribe(
            product => {
                console.log(product);
                this.product = product;
                console.log(this.product);
            },
            error => this.errorMessage = <any>error
            );
      
    //    this._productService.getProduct(id)
    //         .then(product){
    //             this.product = product;
    //         }
      
       console.log('after processed : ' + this.product);
    }
          
}