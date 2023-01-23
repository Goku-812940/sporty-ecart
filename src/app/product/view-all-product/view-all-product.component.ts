import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-view-all-product',
  templateUrl: './view-all-product.component.html',
  styleUrls: ['./view-all-product.component.css']
})
export class ViewAllProductComponent implements OnInit {
productlist :any
filterproducts:any
searchkey:any

  constructor(private ps:ProductServiceService){

  }
  ngOnInit(): void{

    this.ps.viewAllProducts().subscribe((data :any)=>{
      // console.log(data);
      this.productlist=data
    })
     // access data from behavior subject
  this.ps.search.subscribe((data:any)=>{
    this.searchkey= data
  })
  }

  filter(category:any){
    this.filterproducts=this.productlist.filter((item:any)=>{
      if(item.categoryId==category || category==''){
        return item
      }
      
    })
    
  }

 



}
