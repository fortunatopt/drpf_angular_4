import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterContactSectionComponent } from './components/footer-contact-section/footer-contact-section.component';
import { FooterAboutFollowSectionComponent } from './components/footer-about-follow-section/footer-about-follow-section.component';
import { FooterLinksSectionComponent } from './components/footer-links-section/footer-links-section.component';
import { MissionComponent } from './components/mission/mission.component';
import { TeamComponent } from './components/team/team.component';
import { PersonLeaderComponent } from './components/person-leader/person-leader.component';
import { PersonTeamMemberComponent } from './components/person-team-member/person-team-member.component';
import { LinksComponent } from './components/links/links.component';
import { ApiDataService } from './services/api-data.service';

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
  providers: [ApiDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
