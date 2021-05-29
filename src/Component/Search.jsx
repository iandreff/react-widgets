import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Search = () => {
    const [term, setTerm] = useState('');

    useEffect(()=>{
        const search = async () => {
            await axios.get('https://en.wikipedia.org/w/api.php?', {
                params: {
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:term
                }
            });
        }

        search();

    },[term]);

    return (
        <div>
            <div className="ui form">
                <div className="field">
                    <label htmlFor="">Enter the search term</label>
                    <input type="text" 
                        onChange={(e)=>setTerm(e.target.value)} 
                        className="input" 
                        value={term}
                    />
                </div>
            </div>
        </div>
      );
}
 
export default Search;