import { HttpClient} from'@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ListResponseModel } from '../models/ListResponseModel';


import { Product } from '../models/product';


@Injectable({
  providedIn: 'root'
})
export class ProductService {

  apiUrl = 'https://localhost:44326/api/';
  constructor(private httpClient: HttpClient) { }

  getProducts():Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"product/getall"

    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)    
  }

  getProductsByCategory(categoryId:number):Observable<ListResponseModel<Product>> {
    let newPath = this.apiUrl+"product/getbycategory?categoryId="+ categoryId
    return this.httpClient.get<ListResponseModel<Product>>(this.apiUrl)    
  }

}
