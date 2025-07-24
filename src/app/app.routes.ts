import { Routes } from '@angular/router';
import { Acceuil } from './acceuil/acceuil';
import { Sciences } from './sciences/sciences';
import { G } from './g/g';
import { Histoire } from './histoire/histoire';
import { Sports } from './sports/sports';
import { Tech } from './tech/tech';
import { Result } from './result/result';
import { ReG } from './re-g/re-g';
import { ReS } from './re-s/re-s';
import { ReT } from './re-t/re-t';
import { ReH } from './re-h/re-h';
export const routes: Routes = [
    {path:'',component:Acceuil}, {path:'sciences',component:Sciences},{path:'géo',component:G},{path:'histoire',component:Histoire},
    {path:'sport',component:Sports},{path:'tech',component:Tech},{path:'result',component:Result},
{path:'re-g',component:ReG},{path:'re-s',component:ReS},{path:'re-t',component:ReT},{path:'re-h',component:ReH}
];
