import { Component, Inject, OnInit, signal } from '@angular/core';
import { Project } from '../../../interfaces/projects.interface';
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

@Component({
    selector: 'app-dialog-projects',
    imports: [MatDialogModule],
    templateUrl: './dialog-projects.component.html',
    styleUrl: './dialog-projects.component.scss',
})
export class DialogProjectsComponent implements OnInit {
    public getData = signal<Project | null>(null);

    constructor(private _dialogRef: MatDialogRef<DialogProjectsComponent>, @Inject(MAT_DIALOG_DATA) private _data: Project) {}

    ngOnInit(): void {
        this.getData.set(this._data);
    }

    closeModal() {
        this._dialogRef.close();
    }
}
