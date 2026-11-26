import { DecimalPipe, NgFor, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { STUDENTS, Student } from './models/student';

@Component({
  selector: 'app-root',
  imports: [DecimalPipe, NgFor, NgIf, FormsModule],
  templateUrl: './app.component.html',
})
export class AppComponent {
  readonly title = 'EduManager';
  readonly students = STUDENTS;
  searchQuery = '';

  get moyenneGenerale(): number {
    const total = this.students.reduce((sum, student) => sum + student.moyenne, 0);
    return this.students.length ? total / this.students.length : 0;
  }

  get filteredStudents(): Student[] {
    const query = this.searchQuery.trim().toLowerCase();
    return this.students.filter(student =>
      `${student.prenom} ${student.nom}`.toLowerCase().includes(query));
  }
}
