import { Component } from '@angular/core';

@Component({
    selector: 'app-prod',
    templateUrl: './product.component.html',
    // styles: ['thead{color:teal}', 'h4{color:tomato}']
    styleUrls: ['./product.component.css']
})

export class ProductComponent {
 title: String = '****Product Page****';

 info: String = 'No of item search';
 showTable: Boolean = true;
 showImage: Boolean = false;
 userInput: String = 'user text';
 imageWidth: Number = 100;
 products: any[] = [
 {
    '_id': '5a05dacc734d1d68d42d31f3',
    'productId': 1,
    'productName': 'Leaf Rake',
    'productCode': 'GDN-0011',
    'releaseDate': 'March 19, 2016',
    'description': 'Leaf rake with 48-inch wooden handle.',
    'price': 19.95,
    'starRating': 3.5,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png'
  },
  {
    '_id': '5a05daec734d1d68d42d32ca',
    'productId': 2,
    'productName': 'Garden Cart',
    'productCode': 'GDN-0023',
    'releaseDate': 'March 18, 2016',
    'description': '15 gallon capacity rolling garden cart',
    'price': 32.99,
    'starRating': 4.2,
    'imageUrl': 'http://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png'
  }
 ];

 toggleImage(): void {
    this.showImage = !this.showImage;
 }
}

