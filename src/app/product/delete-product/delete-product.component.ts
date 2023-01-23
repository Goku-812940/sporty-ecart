import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-delete-product',
  templateUrl: './delete-product.component.html',
  styleUrls: ['./delete-product.component.css']
})
export class DeleteProductComponent {
  productid:any
constructor(private ar:ActivatedRoute,private ps:ProductServiceService,private router:Router){
  
}
ngOnInit():void{
 
   
}
DeleteProduct(){
  this.ar.params.subscribe((data:any)=>{
  this.productid= data["id"]
  
  
})
this.ps.deleteconfirm(this.productid).subscribe((result:any)=>{
  
  alert('product deleted')
  this.router.navigateByUrl('product')
})
}
cancel(){
  this.ar.params.subscribe((data:any)=>{
    this.productid= data["id"]
  })
  this.router.navigateByUrl('product/view-product/'+this.productid)
}

}
