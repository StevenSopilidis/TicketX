import axios from "axios"
import { useState } from 'react'

export default ({url, method, body, onSuccess }) => {
    const [errors, setErrors] = useState(null)

    // func to make requests
    const doRequest = async () => {
        try {
            // reset errors
            setErrors(null)
            const response = await axios[method](url,body)
            // if onSuccess was provided execute it
            if(onSuccess){
                onSuccess(response.data)
            }
            // return response.data;
            return;
        } catch (err) {
            setErrors(
                <div className="alert alert-danger">
                    <ul className="my-0">
                        {err.response.data.errors.map(err => (<li key={err.message}>{err.message}</li>) )}
                    </ul>
                </div>
            )
        }
    }
    return { doRequest, errors }
}