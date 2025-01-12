import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TravelComponent } from './Travel/components/travel/travel.component';
import { HomeComponent } from './Home/components/home/home.component';
import { PackageComponent } from './Home/components/package/package.component';
import { TravelDetailsComponent } from './Travel/components/Travel-details/travel-details.component';
import { AllDetailsComponent } from './Home/components/all-details/all-details.component';
import { AboutComponent } from './Shared/Components/about/about.component';
import { ContactComponent } from './Shared/Components/contact/contact.component';
const routes: Routes = [
  {path:"home" , component:HomeComponent},
  {path:"package", component:PackageComponent},
  {path:"details/:id", component:TravelDetailsComponent},
  {path:"alldetails" , component:AllDetailsComponent},
  {path:"about" , component:AboutComponent},
  {path:'Contact',component:ContactComponent},
  {path:"all",component:AllDetailsComponent },
  {path:'cairo',component:AllDetailsComponent},
  {path:'luxor',component:AllDetailsComponent},
  {path:'snorkeling',component:AllDetailsComponent},
  {path:'Desert',component:AllDetailsComponent},
  {path:'family',component:AllDetailsComponent},
  {path:'group',component:TravelComponent},
  {path:"group/:id", component:TravelDetailsComponent},
  {path:'**' ,redirectTo:"home", pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 }
