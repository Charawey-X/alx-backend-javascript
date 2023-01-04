export default function updateStudentGradeByCity(students, city, newGrades) {
  return students.filter((student) => student.location === city)
    .map((student) => ({ ...student, grade: newGrades.filter((studentGrade) => student.id === studentGrade.studentId).map((filtered) => filtered.grade)[0] || 'N/A' }));
}
