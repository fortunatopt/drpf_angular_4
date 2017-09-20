import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { FooterContactSectionComponent } from './footer-contact-section/footer-contact-section.component';
import { FooterAboutFollowSectionComponent } from './footer-about-follow-section/footer-about-follow-section.component';
import { FooterLinksSectionComponent } from './footer-links-section/footer-links-section.component';
import { MissionComponent } from './mission/mission.component';
import { TeamComponent } from './team/team.component';
import { PersonLeaderComponent } from './person-leader/person-leader.component';
import { PersonTeamMemberComponent } from './person-team-member/person-team-member.component';
import { LinksComponent } from './links/links.component';

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'mission',
    component: MissionComponent
  },
  {
    path: 'team',
    component: TeamComponent
  },
  {
    path: 'links',
    component: LinksComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    FooterContactSectionComponent,
    FooterAboutFollowSectionComponent,
    FooterLinksSectionComponent,
    MissionComponent,
    TeamComponent,
    PersonLeaderComponent,
    PersonTeamMemberComponent,
    LinksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule, RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
