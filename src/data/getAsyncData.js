import pululos from "./data";

function getAsyncData() {
    console.log("solicitando datos")

    const promiseData = new Promise( (resolve, reject) => {
        const errorFatal = false ;

        setTimeout( () => {

            if (errorFatal) reject("Algo salio mal.")

            console.log("promesa terminada.")
    
            resolve(pululos);

        }, 200)

    } )

    console.log("promesa generada")

    return promiseData;
    
}

export default getAsyncData;


export function getAsyncItemById(id) {

    console.log("solicitando datos del producto con id: ", id)
    const promiseData = new Promise( (resolve, reject) => {

        setTimeout( () => {

            const requestedProduct = pululos.find( (pululos) => pululos.id === parseInt(id) );

            console.log("promesa terminada.");
    
            resolve(requestedProduct);

        }, 200)
    
    } )

    console.log("promesa generada")

    return promiseData
}


export function getAsyncItemByCategory(catID) {

    console.log("solicitando datos de la categoria con id: ", catID)

    const promiseData = new Promise( (resolve) => {

        setTimeout( () => {

            const requestedCategory = pululos.filter( (pululos) => item.category.toLowerCase() === catID.toLowerCase() );

            console.log("promesa terminada.");
    
            resolve(requestedCategory);

        }, 200)
    
    } )

    console.log("promesa generada")

    return promiseData

}

// SE HACE MUCHO EN REACT

// getAsyncData()
// .then( (respuesta) => { console.log(respuesta) } )
// .catch( (error) => { console.log(error) } )