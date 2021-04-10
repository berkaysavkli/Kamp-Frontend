
//app.component.ts dosyası tüm datanın yönetildiği yerdir

import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
//**AppComponent class ının bir komponent olduğunu yukarıdaki
//@Component bloğuyla belli ediliyor.
//**templateUrl ise neyin componenti olduğunu belirliyor
export class AppComponent {
  title = 'northwind';
  user: string = "Engin Demiroğ";
  
}

