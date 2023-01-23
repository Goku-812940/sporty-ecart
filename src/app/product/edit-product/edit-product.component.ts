import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewProductComponent } from '../view-product/view-product.component';
import { ProductServiceService } from '../product-service.service';
import { HttpClientModule } from '@angular/common/http';
@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent {
productid:any
productdata:any
  constructor(private ar:ActivatedRoute,private ps:ProductServiceService,private Router:Router){

  }
  ngOnInit():void{
    this.ar.params.subscribe((data:any)=>{
    this.productid=data["id"]
    })

    this.ps.viewproduct(this.productid).subscribe((item)=>{
      this.productdata=item
    })
  }
  updateProduct(form:any){
    let updateproduct={
      
      id:form.value.id,
      productName:form.value.productName,
      categoryId:form.value.categoryId,
      description:form.value.description,
      orginalPrice:form.value.orginalPrice,
      discountPrice:form.value.discountPrice,
      is_available:form.value.is_available,
      productImg:form.value.productImg,
      rating:form.value.rating,
      brand_name:form.value.brand_name,
      warranty:form.value.warranty
      
    }
    this.ps.updateProduct(this.productid,this.productdata).subscribe((item:any)=>{
      alert("product updated")
      this.Router.navigateByUrl('product')
    })
  }
  
}
