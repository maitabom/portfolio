import { Injectable, signal } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export type Language = 'pt' | 'en' | 'es';

interface TranslationData {
  [key: string]: any;
}

@Injectable({
  providedIn: 'root'
})
export class TranslationService {
  private readonly LANG_KEY = 'portfolio-language';
  currentLang = signal<Language>('pt');
  private translations: { [key: string]: TranslationData } = {};
  private loaded = false;

  constructor(private http: HttpClient) {
    this.loadLanguage();
    this.loadTranslations();
  }

  private loadLanguage(): void {
    const savedLang = localStorage.getItem(this.LANG_KEY) as Language;
    if (savedLang && ['pt', 'en', 'es'].includes(savedLang)) {
      this.currentLang.set(savedLang);
    }
  }

  private loadTranslations(): void {
    const languages: Language[] = ['pt', 'en', 'es'];

    languages.forEach(lang => {
      this.http.get<TranslationData>(`/locales/${lang}.json`).subscribe({
        next: (data) => {
          this.translations[lang] = data;
          this.loaded = true;
        },
        error: (error) => {
          console.error(`Error loading ${lang} translations:`, error);
        }
      });
    });
  }

  setLanguage(lang: Language): void {
    this.currentLang.set(lang);
    localStorage.setItem(this.LANG_KEY, lang);
  }

  translate(key: string): string {
    if (!this.loaded) {
      return key;
    }

    const lang = this.currentLang();
    const keys = key.split('.');
    let value: any = this.translations[lang];

    for (const k of keys) {
      if (value && typeof value === 'object' && k in value) {
        value = value[k];
      } else {
        return key;
      }
    }

    return typeof value === 'string' ? value : key;
  }

  t = (key: string) => this.translate(key);
}

