import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NewsComponent } from './components/news/news.component';
import { ViewLogComponent } from './components/view-log/view-log.component';
import { SaveLogComponent } from './components/save-log/save-log.component';


const routes: Routes = [{
  path: '', component: ViewLogComponent
},
{path: 'add', component: SaveLogComponent},
{path: 'news', component: NewsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
