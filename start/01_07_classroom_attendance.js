function getStudents(classroom) {
  let { hasTeachingAssistant, classList } = classroom;
  let teacher, teachingAssinstant, students;

  if (hasTeachingAssistant) {
    [teacher, teachingAssinstant, ...students] = classList;
  } else {
    [teacher, ...students] = classList;
  }
  return students;
}

console.log(
  getStudents({
    hasTeachingAssistant: false,
    classList: ["Mr. Garrison", "Mr. Hat", "Kyle", "Eric", "Stan", "Kenny"],
  })
);
