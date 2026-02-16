import { Component, signal, computed } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  template: `
    <!-- 
      Sidebar Container:
      - w-16 (collapsed) vs w-64 (expanded)
      - Expands on hover via mouseenter/mouseleave
      - Can be permanently locked open via 'isLocked'
    -->
    <nav 
      class="flex-shrink-0 flex flex-col bg-surface border-r border-border py-4 z-30 transition-all duration-300 ease-in-out h-full overflow-hidden whitespace-nowrap group relative"
      [class.w-16]="!isOpen()"
      [class.w-64]="isOpen()"
      (mouseenter)="onMouseEnter()"
      (mouseleave)="onMouseLeave()"
    >
        <!-- Header Section -->
        <div class="flex items-center h-10 px-3 mb-6 relative w-full">
            <!-- Main Logo / Toggle Button -->
            <!-- Always visible. Clicking toggles lock state. -->
            <button 
                class="size-10 bg-primary flex items-center justify-center text-white font-bold text-xl rounded-sm shadow-sm flex-shrink-0 cursor-pointer hover:bg-primary-hover transition-colors select-none z-20 focus:outline-none focus:ring-2 focus:ring-primary/50" 
                (click)="toggleLock()"
                title="Click to Lock/Unlock Sidebar"
            >
                CR
            </button>
            
            <!-- Expanded Content: Title & Pin Button -->
            <!-- Visible only when sidebar is open (locked or hovered) -->
            <div class="flex flex-1 items-center justify-between ml-3 overflow-hidden transition-opacity duration-200 delay-100"
                 [class.opacity-0]="!isOpen()" 
                 [class.opacity-100]="isOpen()">
                
                <div class="flex flex-col overflow-hidden">
                    <span class="font-bold text-sm text-text-main tracking-tight truncate">THE CONTROL ROOM</span>
                    <span class="text-[10px] text-text-dim font-mono">v2.4.0</span>
                </div>

                <!-- Explicit Lock/Pin Button -->
                <!-- Provides clear affordance for the locking behavior -->
                <button 
                    class="size-8 flex items-center justify-center text-text-dim hover:text-primary hover:bg-blue-50 rounded-sm transition-all focus:outline-none"
                    (click)="toggleLock(); $event.stopPropagation()"
                    [title]="isLocked() ? 'Unpin Sidebar (Collapse on mouse leave)' : 'Pin Sidebar (Keep open)'"
                >
                    <span class="material-symbols-outlined text-[18px]">
                        {{ isLocked() ? 'lock' : 'lock_open' }}
                    </span>
                </button>
            </div>
        </div>

        <!-- Navigation Links -->
        <div class="flex flex-col gap-1 w-full px-2">
            <a *ngFor="let item of navItems" 
               [routerLink]="item.link" 
               routerLinkActive="bg-blue-50 text-primary border-l-primary"
               [routerLinkActiveOptions]="{exact: false}"
               class="flex items-center p-2 text-text-dim hover:text-primary hover:bg-blue-50 border-l-2 border-transparent transition-all overflow-hidden h-10 rounded-r-sm cursor-pointer group/link"
               [title]="!isOpen() ? item.label : ''">
                <span class="material-symbols-outlined flex-shrink-0 text-[20px]">{{ item.icon }}</span>
                
                <!-- Label: Fades in when open -->
                <span class="ml-3 font-medium text-sm transition-opacity duration-200 delay-75 truncate"
                      [class.opacity-0]="!isOpen()" 
                      [class.opacity-100]="isOpen()">
                    {{ item.label }}
                </span>
            </a>
        </div>

        <!-- Footer Section -->
        <div class="mt-auto flex flex-col gap-1 w-full px-2 pb-2">
            <button class="flex items-center p-2 text-text-dim hover:text-primary transition-colors h-10 w-full overflow-hidden rounded-r-sm cursor-pointer border-l-2 border-transparent hover:bg-blue-50">
                <span class="material-symbols-outlined flex-shrink-0 text-[20px]">settings</span>
                <span class="ml-3 font-medium text-sm transition-opacity duration-200 delay-75 truncate"
                      [class.opacity-0]="!isOpen()" 
                      [class.opacity-100]="isOpen()">
                    Settings
                </span>
            </button>
            
            <div class="flex items-center gap-3 p-2 overflow-hidden cursor-pointer hover:bg-gray-50 rounded-sm mt-2 transition-colors border border-transparent hover:border-border-light">
                <div class="bg-center bg-no-repeat bg-cover size-8 rounded-sm border border-border flex-shrink-0" style='background-image: url("https://lh3.googleusercontent.com/aida-public/AB6AXuAj0kk77A-Ukm1JHZIP3batMiciM2QrKVNN7f6Yf2doZEj3BFZt3e5vW0z6BOi0EKP1w78zy_mPP4zIq2d7u04NoQzcMhmLxcou1ZdQeMuJhN3ZMzrGvOCygHqi7aFkxqjce-YUBp-5aas_qg_4IAb_RPvMFMOA46_Kb3AHx2mOF_9lVZyp_xIEuqU13J-H8nUqlr3Bogzk0gxCc94uoRHeV-OKnpHj3hdF71-BWuzkepT808Xz-EMOpYcbPmMSOV9qx4j_wU2tvyIA");'></div>
                <div class="flex flex-col transition-opacity duration-200 overflow-hidden"
                     [class.opacity-0]="!isOpen()" 
                     [class.opacity-100]="isOpen()">
                    <span class="text-xs font-bold text-text-main leading-none truncate">J. Doe</span>
                    <span class="text-[10px] text-text-dim leading-none mt-1 truncate">Admin</span>
                </div>
            </div>
        </div>
    </nav>
  `
})
export class SidebarComponent {
  // State: Is the sidebar permanently locked open?
  isLocked = signal(false);
  // State: Is the mouse currently hovering over the sidebar?
  isHovered = signal(false);

  // Derived State: The sidebar is "Open" visually if it is Locked OR Hovered
  isOpen = computed(() => this.isLocked() || this.isHovered());
  
  navItems = [
    { label: 'Dashboard', link: '/dashboard', icon: 'dashboard' },
    { label: 'Agency Foundry', link: '/foundry', icon: 'domain' },
    { label: 'Equity & Roles', link: '/equity', icon: 'pie_chart' },
    { label: 'The Vault', link: '/vault', icon: 'lock' },
    { label: 'Bid War Room', link: '/bid', icon: 'gavel' },
    { label: 'Tax Forensics', link: '/tax', icon: 'receipt_long' },
  ];

  toggleLock() {
    this.isLocked.update(v => !v);
  }

  onMouseEnter() {
    // Only set hover state if not locked (avoid redundant checks, though harmless)
    if (!this.isLocked()) {
      this.isHovered.set(true);
    }
  }

  onMouseLeave() {
    // Always clear hover state on leave
    this.isHovered.set(false);
  }
}