import React, { useEffect, useState } from "react";
import axios from "axios" //npm install axios --save 
import parse from 'html-react-parser'
import words from "../../words";

import './Admin.css'

export default function LettersPage(){
    const [letters, setLetters] = useState([]);

    useEffect(() => {
        getLetters();
    }, []);
  
    function getLetters() {
        axios.get(words.api.admin.letter.list).then(function(response) {
            setLetters(response.data);
        });
    }
    
    return(
        <div className="admin letters">
            <div className="header">
                <a href="/admin/home">Back to Home</a>
                <div className="flex-row justify-space-btw">
                    <h1>Letters List</h1>
                </div>
            </div>
            <div className="body">
            <table class="dbTable">
                    <thead>
                        <tr>
                            <th className="name">Name</th>
                            <th className="email">Email/Phone</th>
                            <th className="content">Title/Message</th>
                            <th className="date">Date Added</th>
                            <th className="action">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {letters.map((letter,key) => 
                        <tr key={key}>
                            <td>{letter.name}</td>
                            <td>{letter.email}<br/>{letter.phone}</td>
                            <td>{letter.title}<br/>{parse(letter.message)}</td>
                            <td>{letter.date}</td>
                            <td><a href = {`mailto: ${letter.email}`}>Send Email</a></td>
                        </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}