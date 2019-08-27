import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IntroComponent } from './intro/intro.component';
import { GallaryComponent } from './gallary/gallary.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { ClientsComponent } from './clients/clients.component';
import { PricingComponent } from './pricing/pricing.component';
import { HeaderComponent } from './header/header.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';
import { LoginComponent } from './login/login.component';
import { ContcatusComponent } from './contcatus/contcatus.component';
import { SignupComponent } from './signup/signup.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { GaurdService } from './gaurd.service';

const routes: Routes = [
  { path: "" , redirectTo:"/Home" , pathMatch:"full"},
  { path: "Home" , component:HeaderComponent},
  { path: "About" , component:IntroComponent},
  { path: "Services" , component:ContentComponent},
  { path: "Testmonials" , component:TestimonialsComponent},
  { path: "Gallary" , component:GallaryComponent},
  { path: "Clients" , component:ClientsComponent},
  { path: "Pricing" , component:PricingComponent},
  { path: "Blog" , component:BlogComponent , canActivate: [GaurdService]},
  { path: "Post" , component:PostComponent},
  { path: "Login" , component:LoginComponent},
  { path: "Signup" , component:SignupComponent},
  { path: "Contactus" , component:ContcatusComponent},
  { path: "Article/:id" , component:ArticleComponent},
  { path: "404" , component:NotFoundComponent},
  { path: "**" , redirectTo:'/404'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
