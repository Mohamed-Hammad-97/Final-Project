import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProductsComponent } from './products/products.component';
import { SigninComponent } from './signin/signin.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { CategoriesComponent } from './categories/categories.component';
import { BrandComponent } from './brand/brand.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { authGuard } from './auth.guard';
import { ProductDeatilsComponent } from './product-deatils/product-deatils.component';

const routes: Routes = [
  { path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home",canActivate:[authGuard], component: HomeComponent , title:"Home"},
  { path: "about", canActivate: [authGuard], component: AboutComponent, title: "About" },
  { path: "products", canActivate: [authGuard], component: ProductsComponent, title: "Products"},
  { path: "categries", canActivate: [authGuard], component: CategoriesComponent, title: "categries"},
  { path: "brand", canActivate: [authGuard], component: BrandComponent, title: "brand"},
  { path: "productDetails/:id", canActivate: [authGuard], component: ProductDeatilsComponent, title: "product Details"},


  { path: "signIn", component: SigninComponent, title: "SignIn" },
  { path: "signUp", component: SignUpComponent, title: "SignUp" },
  { path: 'cart', loadChildren: () => import('./cart/cart.module').then(m => m.CartModule) },
  { path: "**" , component:NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes , {useHash:true})],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
