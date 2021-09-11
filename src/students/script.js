const studentsMock = (() => {
    const generateMarksArray = (qtt, min, max) => new Array(qtt).fill(min).map(() => faker.datatype.number({ min, max }));

    const getStudent = () => ({
        name: faker.name.findName(),
        specialty: faker.name.jobTitle(),
        marks: generateMarksArray(10, 20, 100),
    });

    const getStudentList = qtt => new Array(qtt).fill(null).map(getStudent);

    return {
        getStudent,
        getStudentList
    };
})();