import axios from 'axios'

let headersConfig =  {
    headers: {
        Authorization:`Bearer ${localStorage.getItem("Token")} `
    }
}

export const getBook = () =>{
    let response = axios.get("http://localhost:5000/api/v1/books", headersConfig)
    return response
}


export const getCart = () =>{
    let response = axios.get("http://localhost:5000/api/v1/carts", headersConfig)
    return response
}

export const updateCart = (obj, id) =>{
    let response = axios.put(`http://localhost:5000/api/v1/carts/${id}`, obj, headersConfig)
    return response
}

export const addCart = (id) =>{
    let response = axios.post(`http://localhost:5000/api/v1/carts/${id}`, null,  headersConfig)
    return response
}

export const addWishlist = (id) =>{
    let response = axios.post(`http://localhost:5000/api/v1/wishlists/${id}`, null,  headersConfig)
    return response
}

// export const purchased = (id) =>{
//     let response = axios.put(`http://localhost:5000/api/v1/wishlists/${id}/isPurchased`, null,  headersConfig)
//     return response
// }

export const addCustomer = (obj) =>{
    let response = axios.post(`http://localhost:5000/api/v1/userdetails`, obj,  headersConfig)
    return response
}

export const RemoveCart = (id) =>{
    let response = axios.put(`http://localhost:5000/api/v1/carts/${id}/remove`,null, headersConfig)
    return response
}


