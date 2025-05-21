import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { Router } from '@angular/router';
import { TopMenuComponent } from './components/top-menu/top-menu.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [TopMenuComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(
    @Inject(PLATFORM_ID) private platformId: Object,
    private router: Router
  ) {}

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      const supportedLangs = ['pt', 'en', 'es']; // Seus idiomas configurados (sourceLocale e locales)
      const currentPath = window.location.pathname;
      const pathSegments = currentPath.split('/');
      const currentLangSegment = pathSegments[1];

      // Verifica se a URL já está prefixada com um idioma suportado
      if (supportedLangs.includes(currentLangSegment)) {
        // Já está em uma URL de idioma (ex: /en/home), não faz nada
        return;
      }

      // Detecta o idioma do navegador (ex: "en-US" -> "en")
      let browserLang = navigator.language.split('-')[0].toLowerCase();

      // Se o idioma do navegador não estiver entre os suportados, usa o sourceLocale como padrão
      if (!supportedLangs.includes(browserLang)) {
        browserLang = 'pt'; // Seu sourceLocale definido em angular.json
      }

      // Constrói a nova URL com o prefixo do idioma.
      // Preserva o restante do caminho, query params e hash.
      // Ex: se currentPath for '/some/page?query=1#hash' e browserLang for 'en',
      // newPath será '/en/some/page?query=1#hash'.
      // Se currentPath for '/', newPath será '/en/'.
      const remainingPath = pathSegments.slice(1).join('/');
      const newPath = `/${browserLang}${currentPath === '/' && !remainingPath ? '/' : currentPath}${window.location.search}${window.location.hash}`;

      // Redireciona para a URL com o prefixo do idioma, substituindo a entrada atual no histórico
      this.router.navigateByUrl(newPath, { replaceUrl: true });
    }
    // ...coloque aqui qualquer código existente em ngOnInit...
  }
}
