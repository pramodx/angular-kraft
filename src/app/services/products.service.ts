import {PRODUCTS} from "../data/products";
import {Injectable} from "@angular/core";

@Injectable()
export class ProductsService {
  getAllProducts() {
    return Promise.resolve(PRODUCTS);
  }
}
