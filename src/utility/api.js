import { api } from '../constant/index'


export const getData = (url, callback) => {
    fetch(`${api.url}${url}`, {
        method: 'get',
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        }
    }).then(res => res.json())
        .then(result => callback(result))
        .catch(err => callback(err))
}

export const postData = (url, data, callback) => {
    console.log(`${api.url}${url}`)

    fetch(`${api.url}${url}`, {
        method: 'post',
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token')
        },
        body: JSON.stringify(data)
    }).then(res => res.json())
        .then(result => callback(result))
        .catch(err => callback(err))
}



export const putData = (url, data, callback) => {
    fetch(`${api.url}${url}`, {
        method: 'put',
        headers: {
            'Content-Type': 'application/json',
            'authorization': localStorage.getItem('token'),
        }, body: JSON.stringify(data)
    }).then(res => res.json())
        .then(result => callback(result))
        .catch(err => callback(err))
}