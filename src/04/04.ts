const age = [10, 20, 22, 32, 65, 76, 99];

const predicate = (age: number) => {
    return age > 90;
}

const oldAges = [99] // > 90

type CoursesType = {
    title: string
    price: number
}

const courses = [
    {title: 'css', price: 100},
    {title: 'html', price: 150},
    {title: 'react', price: 100},
]

const cheapPredicate = (course: CoursesType) => {
    return course.price < 140
}

const chipCourses = []