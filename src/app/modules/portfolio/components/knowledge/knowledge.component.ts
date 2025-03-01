import { Component, signal } from '@angular/core';
import { Knowledge } from '../../interfaces/knowledge.interface';

@Component({
    selector: 'app-knowledge',
    imports: [],
    templateUrl: './knowledge.component.html',
    styleUrl: './knowledge.component.scss',
})
export class KnowledgeComponent {
    public getKnowledges = signal<Knowledge[]>([
        {
            src: 'assets/icons/knowledge/html5.svg',
            alt: 'Ícone de conhecimento de html5',
        },
        {
            src: 'assets/icons/knowledge/css3.svg',
            alt: 'Ícone de conhecimento de css3',
        },
        {
            src: 'assets/icons/knowledge/javascript.svg',
            alt: 'Ícone de conhecimento de javascript',
        },
        {
            src: 'assets/icons/knowledge/angular.svg',
            alt: 'Ícone de conhecimento de angular',
        },
        {
            src: 'assets/icons/knowledge/nodejs.svg',
            alt: 'Ícone de conhecimento de nodejs',
        },
    ]);
}
