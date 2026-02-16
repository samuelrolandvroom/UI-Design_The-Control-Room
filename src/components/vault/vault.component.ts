import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../layout/sidebar.component';

@Component({
  selector: 'app-vault',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, SidebarComponent],
  templateUrl: './vault.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VaultComponent {}