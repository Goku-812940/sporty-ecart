import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-product',
  templateUrl: './view-product.component.html',
  styleUrls: ['./view-product.component.css']
})
export class ViewProductComponent {
  productid:any
  productdata:any
constructor(private ar:ActivatedRoute,private ps:ProductServiceService){

}
ngOnInit():void {
  this.ar.params.subscribe((data:any)=>{
    this.productid= data["id"]
    
    
  })
  this.ps.viewproduct(this.productid).subscribe((result:any)=>{
    
    this.productdata=result
  })
}
}
