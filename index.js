// const formData = {
//     dogName: "Byron",
//     dogBreed: "Poodle",
// }

// const configurationObject = {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//         'Accept': 'application/json',
//     },
//     body: JSON.stringify({formData}),
// };

// fetch('http://localhost:3000/dogs', configurationObject)
//     .then(res => res.json())
//     .then(object => console.log(object));


function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name,
            email
        }),
    })
        .then(res => res.json())
        .then(data => document.body.append(data[ "id"]))
        .catch(err => document.body.append(err.message))
}

