import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  //"any" veri tipi her şey olabilir demek. Veri tipi yazılmasa da olur


  //Liste belirtmek için [] kullanılır
  //this o anda kullanılan nesne anlamına geliyor
  products:Product[] = [
    
  ];
  constructor() {}

  ngOnInit(): void {}
}
