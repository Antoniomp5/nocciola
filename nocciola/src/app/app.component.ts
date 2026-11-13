import { Component, OnInit } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular';
import { SettingsService } from './services/settings.service';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent implements OnInit {
  
  constructor(private settingsService: SettingsService) {}

  // Angular ejecuta este método al iniciar el componente.
  // Esperamos a recuperar la preferencia antes de aplicar el tema.
  async ngOnInit(): Promise<void> {
    await this.cargarPreferencias();
  }

  async cargarPreferencias(): Promise<void> {
    // Leemos el ajuste guardado
    const modoOscuro = await this.settingsService.get('modo_oscuro');
    
    document.body.classList.toggle('dark', modoOscuro);
    document.body.classList.toggle('light', !modoOscuro);
  }
    
  
}