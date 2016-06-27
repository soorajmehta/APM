import { Component, OnInit } from 'angular2/core'

import { IProduct } from './product'
import { ProductFilterPipe } from './product-filter.pipe'
import { StarComponent } from '../shared/star.component'
import { ProductService } from './product.service'
import { ROUTER_DIRECTIVES } from 'angular2/router'


@Component({
    selector:'pm-products',
    templateUrl:'app/products/product-list.component.html',
    styleUrls:['app/products/product-list.component.css'],
    pipes:[ProductFilterPipe],
    directives:[StarComponent, ROUTER_DIRECTIVES]    
})
export class ProductListComponent implements OnInit{
           
    pageTitle:string = "Product List";
    imageWidth:number = 50
    imageMargin:number = 2;
    showImage:boolean = false;
    listFilter:string = '';
    products: IProduct[];
    errrMessage:string;
    
    constructor(private _productService : ProductService){
        
    }
    
    ngOnInit(){
         this._productService.getProducts().subscribe(
             products => this.products = products,
             error => this.errrMessage = <any>error             
         );
    }
    
    toggleImage() : void{
        this.showImage = !this.showImage;
    }
    
    onRatingClicked(message:string):void{       
        console.log(message);
    }
}