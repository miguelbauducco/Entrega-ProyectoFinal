//UTILIZACION DE FETCH

const clienteName = document.getElementById("clientename");

const clientComment= async() => {

    const resp=await

    fetch("https://rickandmortyapi.com/api/character/2/name")

    const data = await resp.json()

        data.forEach((post) => {

            const h5Element = document.createElement('h5')

        h5Element.innerHTML = `<h5>${post.name}</h5>`

        clienteName.append(h5)

        })

}

clientComment();