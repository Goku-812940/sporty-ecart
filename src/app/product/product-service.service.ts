import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject} from'rxjs'
@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  search=new BehaviorSubject("")
  constructor(private http:HttpClient) { }

  // http request view all product
viewAllProducts(){
  return this.http.get('http://localhost:3000/products')

}
addProduct(newProduct:any){

  return this.http.post('http://localhost:3000/products',newProduct)
}

// to get single product data

viewproduct(id:any){

  return this.http.get('http://localhost:3000/products/'+id)

}
deleteconfirm(id:any){
  return this.http.delete('http://localhost:3000/products/'+id)
}
updateProduct(id:any,data:any){
    return this.http.put('http://localhost:3000/products/'+id,data)

}
}
