import React, { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import ReviewForm from "../../components/ReviewForm";
import words from "../../words";

const getCkeditorImg = (data) => 
    Array.from( new DOMParser().parseFromString(data, 'text/html' )
        .querySelectorAll( 'img' ) )
        .map( img => img.getAttribute( 'src' ) )

export const removeOldImg = (oldData, newData) => {
    const oldImg = getCkeditorImg(oldData)
    const newImg = getCkeditorImg(newData)
    if(JSON.stringify(oldImg) !== JSON.stringify(newImg))
        oldImg.map((img) => {
            if(!img) return
            const fileName = img.split("/")[img.split("/").length - 1]

            axios.get(`${words.api.admin.file.remove(fileName)}`).catch((error) => console.log(error))
        })   
}

export default function CreateReview() {
    const navigate = useNavigate();
    const {category} = useParams();

    const [inputs, setInputs] = useState([]);
    const [error, setError] = useState(null);
    const validation = inputs.name !== undefined && inputs.message !== undefined && inputs.cover !== undefined && inputs.name !== '' && inputs.message !== ''

    const hiddenFileInput = useRef(null);

    useEffect(() => {
        setInputs(values => ({...values, category: category})); 
    }, []);

    const handleTextChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value}));
    }
    const handleCoverChange = event => {
        const fileUploaded = event.target.files[0];
        if(inputs.cover) axios.get(`${words.api.admin.file.remove(inputs.cover)}`).catch((error) => console.log(error))
        const body = new FormData();
        body.append("file", fileUploaded);
        fetch(`${words.api.admin.file.post}`, {
            method: "post",
            body: body
        })
        .then(response => response.json())
        .then((result) => {
            setInputs(values => ({...values, ["cover"]: result.filename}));
        })
 
      };
    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(inputs)
        axios.post(words.api.admin.review.add, inputs).then(function(response){
            console.log(response.data);
            navigate('/admin/reviewManage');
        }).catch((error) => setError(error));
    }
    const handleClick = event => {
        hiddenFileInput.current.click();
      }
    
    return(
        <ReviewForm
            inputs={inputs}
            setInputs={setInputs}
            error={error}
            validation={validation}
            category={category}
            hiddenFileInput={hiddenFileInput}
            handleTextChange={handleTextChange}
            handleCoverChange={handleCoverChange}
            handleSubmit={handleSubmit}
            handleClick={handleClick}
            handleRemoveOldImg={removeOldImg}
            isEdit={false}
        />
    )
}