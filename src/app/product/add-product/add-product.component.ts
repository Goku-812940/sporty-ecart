import { Component } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Route, Router } from '@angular/router';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent {
  constructor(private fb:FormBuilder,private ps:ProductServiceService,private router:Router){

  }

  addProductForm=this.fb.group({
    
      id: [''],
      productName:[''],
      categoryId: [''],
      description:[''],
      orginalPrice:[''],
      discountPrice:[''],
      is_available: [''],
      productImg:[''],
      rating:[''],
      brand_name:[''],
      warranty:['']
    
  })
  addNewProduct(){
    let newProductData={

      id:this.addProductForm.value.id,
      productName:this.addProductForm.value.productName,
      categoryId:this.addProductForm.value.categoryId,
      description: this.addProductForm.value.description,
      orginalPrice:this.addProductForm.value.orginalPrice,
      discountPrice:this.addProductForm.value.discountPrice,
      is_available:this.addProductForm.value.is_available,
      productImg:this.addProductForm.value.productImg,
      rating:this.addProductForm.value.rating,
      brand_name:this.addProductForm.value.brand_name,
      warranty:this.addProductForm.value.warranty

    }
    this.ps.addProduct(newProductData).subscribe((result:any)=>{
      alert('Product added')
      this.router.navigateByUrl('product')
    })
  }


}
