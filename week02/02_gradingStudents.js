/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    let roundedGrades = grades.map(grade => {
        let nextFiveMultiple = (parseInt(grade / 5) + 1) * 5
        // console.log(nextFiveMultiple)

        if (grade >= 38 && nextFiveMultiple - grade < 3) {
            grade = nextFiveMultiple
        }
        return grade

    })

    return roundedGrades
}


console.log(gradingStudents([73, 67, 38, 33]))

