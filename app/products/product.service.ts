import  { Injectable } from 'angular2/core'
import  {Http, Response} from 'angular2/http'
import {Observable} from 'rxjs/Observable'

import { IProduct } from './product'

@Injectable()
export class ProductService{
    
    private productUrl : string = 'api/products/products.json'
    constructor(private _http : Http){
        
    }
    
    getProducts(): Observable<IProduct[]> {
        return this._http.get(this.productUrl)
                    .map((response:Response) => <IProduct[]>response.json())
                    .do(data => console.log('All : '))
                    .catch(this.handleError);
    }
    
    private handleError(error:Response){
        console.log(error);
        return Observable.throw(error.json().error || 'Server Error');
    }
    
    getProduct(id : number): Observable<IProduct>{       
         return this.getProducts()
            .map((products: IProduct[]) => products.find(p => p.productId === id));
            
            //  return this.getProducts()
            // .map((products: IProduct[]) => products.find(p => p.productId === id))
            // .toPromise();
           
    }
}