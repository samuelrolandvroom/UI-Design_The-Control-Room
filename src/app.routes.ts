import { Routes } from '@angular/router';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AgencyBuilderComponent } from './components/agency-builder/agency-builder.component';
import { EquityRolesComponent } from './components/equity-roles/equity-roles.component';
import { VaultComponent } from './components/vault/vault.component';
import { BidWarRoomComponent } from './components/bid-war-room/bid-war-room.component';
import { TaxForensicComponent } from './components/tax-forensic/tax-forensic.component';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'foundry', component: AgencyBuilderComponent },
  { path: 'equity', component: EquityRolesComponent },
  { path: 'vault', component: VaultComponent },
  { path: 'bid', component: BidWarRoomComponent },
  { path: 'tax', component: TaxForensicComponent },
];