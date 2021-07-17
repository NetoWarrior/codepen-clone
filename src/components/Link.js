import axios from 'axios';
import React, { useState } from 'react';
//import pasteBinAPI from 'pastebin-js';
//import uid from 'short-uuid';

export default function Link({code}) {

    const [link, setLink] = React.useState('CORS Error from Pastebin');

    //Shareable Link
    const[showLink,setShowLink] = React.useState(false);

    const onClickLink = () => {
        const bodyFormData = new FormData();

        bodyFormData.append('api_dev_key','4ja5rnnzyKracDaJW4KX5sXcXnrBP64q');
        bodyFormData.append('api_option','paste');
        bodyFormData.append('api_paste_code',code);

          axios({
            method: "post",
            url: "https://pastebin.com/api/api_post.php",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
          })
            .then(function (response) {
              //handle success
              console.log(response);
            })
            .catch(function (response) {
              //handle error
              console.log(response);
            });

            setShowLink(!showLink);

      } 

    return (
        <div>
            <input style={{"color":"green",'margin-top':'3rem'}} type="submit" value="Get Shareable Link" onClick={onClickLink} />
            {showLink && <h2 style={{'color':'red'}}>{link}</h2>}
        </div>
    )
}
