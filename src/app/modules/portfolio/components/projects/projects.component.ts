import { Component, inject, signal } from '@angular/core';
import { MatDialog, MatDialogModule } from '@angular/material/dialog';
import { Project } from '../../interfaces/projects.interface';
import { DialogPanelClass } from '../../enums/dialogpanelclass.enum';
import { DialogProjectsComponent } from '../dialog/dialog-projects/dialog-projects.component';

@Component({
    selector: 'app-projects',
    imports: [MatDialogModule],
    templateUrl: './projects.component.html',
    styleUrl: './projects.component.scss',
})
export class ProjectsComponent {
    dialog = inject(MatDialog);

    public getProjects = signal<Project[]>([
        {
            src: 'assets/img/projects/vfull.png',
            alt: 'Projeto Vida FullStack',
            title: 'Vida FullStack',
            with: '100px',
            height: '51px',
            description: '<p>Explore o fascinante mundo do desenvolvimento web no meu blog dedicado exclusivamente ao ecossistema Angular, Front-end, JavaScript, Node.js e TypeScript.</p> <p>Desvende os segredos por trás da construção de interfaces modernas, aprimore suas habilidades de programação front-end quanto back-end e mergulhe em conceitos avançados de JavaScript e TypeScript.</p>',
            links: [
                {
                    name: 'Conheça o Blog',
                    href: 'https://vidafullstack.com.br',
                },
            ],
        },
    ]);

    public openDialog(data: Project) {
        this.dialog.open(DialogProjectsComponent, {
            data,
            panelClass: DialogPanelClass.PROJECTS,
        });
    }
}
