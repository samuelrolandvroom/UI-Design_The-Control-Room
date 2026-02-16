import { Component, ChangeDetectionStrategy } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';
import { SidebarComponent } from '../layout/sidebar.component';

@Component({
  selector: 'app-agency-builder',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, CommonModule, SidebarComponent],
  templateUrl: './agency-builder.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AgencyBuilderComponent {}