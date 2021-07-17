import axios from 'axios';
import React, {useState} from 'react';
import uid from 'short-uuid';

export default function Link({code}) {

    const [link, setLink] = React.useState('CORS Error from Pastebin');

    //Shareable Link
    const[showLink,setShowLink] = React.useState(false);

    const onClickLink = () => {
        axios.post('https://pastebin.com/api/api_post.php',{
            api_dev_key:'4ja5rnnzyKracDaJW4KX5sXcXnrBP64q',
            api_paste_code:code,
            api_paste_name:uid.generate(),
            api_paste_expire_date:'10M',
            api_paste_format:'html',
        }).then(res => {
            console.log(res);
        })

        setShowLink(!showLink);
      } 

    return (
        <div>
            <input style={{"color":"green",'margin-top':'3rem'}} type="submit" value="Get Shareable Link" onClick={onClickLink} />
            {showLink && <h2 style={{'color':'red'}}>{link}</h2>}
        </div>
    )
}
