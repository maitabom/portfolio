import { Injectable, signal, OnDestroy } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ThemeService implements OnDestroy {
  private readonly THEME_KEY = 'portfolio-theme';
  isDarkMode = signal<boolean>(false);
  private mediaQueryList: MediaQueryList;
  private mediaQueryListener: (e: MediaQueryListEvent) => void;

  constructor() {
    this.mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)');
    this.mediaQueryListener = (e: MediaQueryListEvent) => this.onSystemThemeChange(e);
    this.loadTheme();
    this.setupSystemThemeListener();
  }

  private loadTheme(): void {
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (savedTheme) {
      // Se o usuário já escolheu um tema manualmente, usar esse tema
      this.isDarkMode.set(savedTheme === 'dark');
    } else {
      // Se não há tema salvo, detectar preferência do sistema
      this.isDarkMode.set(this.mediaQueryList.matches);
    }
    this.applyTheme();
  }

  private setupSystemThemeListener(): void {
    // Apenas escutar mudanças do sistema se não houver tema salvo manualmente
    this.mediaQueryList.addEventListener('change', this.mediaQueryListener);
  }

  private onSystemThemeChange(e: MediaQueryListEvent): void {
    // Apenas aplicar mudança automática se o usuário não tiver escolhido um tema manualmente
    const savedTheme = localStorage.getItem(this.THEME_KEY);
    if (!savedTheme) {
      this.isDarkMode.set(e.matches);
      this.applyTheme();
    }
  }

  toggleTheme(): void {
    this.isDarkMode.update(value => !value);
    this.applyTheme();
    // Salvar a preferência do usuário (isso desativa a sincronização automática com o sistema)
    localStorage.setItem(this.THEME_KEY, this.isDarkMode() ? 'dark' : 'light');
  }

  resetToSystemTheme(): void {
    // Remove a preferência salva e volta a seguir o tema do sistema
    localStorage.removeItem(this.THEME_KEY);
    this.isDarkMode.set(this.mediaQueryList.matches);
    this.applyTheme();
  }

  private applyTheme(): void {
    if (this.isDarkMode()) {
      document.body.classList.add('dark-theme');
      document.body.classList.remove('light-theme');
    } else {
      document.body.classList.add('light-theme');
      document.body.classList.remove('dark-theme');
    }
  }

  ngOnDestroy(): void {
    // Limpar o listener quando o serviço for destruído
    this.mediaQueryList.removeEventListener('change', this.mediaQueryListener);
  }
}

