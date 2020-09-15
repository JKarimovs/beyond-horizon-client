import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AngularMaterialModule } from './angular-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { LayoutModule } from '@angular/cdk/layout';
import { RouterModule } from '@angular/router';

// App components
import { AppComponent } from './app.component';
import { GameComponent } from './game/game.component';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { OverviewComponent } from './overview/overview.component';
import { CharacterProfileComponent } from './character-profile/character-profile.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

// Services
import { AuthService } from './services/auth.service';
import { AuthGuard } from './services/auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    GameComponent,
    SideMenuComponent,
    OverviewComponent,
    CharacterProfileComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    LayoutModule,
    FlexLayoutModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path:'login', component: LoginComponent },
      { path:'register', component: RegisterComponent },
      { path: '',   redirectTo: '/play', pathMatch: 'full' },
      { path:'play', component: GameComponent, canActivate: [AuthGuard],
        children: [
          { path:'charprofile', component: CharacterProfileComponent }
      ]},
    ])
  ],
  providers: [AuthService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
