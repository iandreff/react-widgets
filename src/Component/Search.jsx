import axios from 'axios';
import React, {useEffect, useState} from 'react';

const Search = () => {
    const [term, setTerm] = useState('programing');
    const [debouncedTerm, setDebouncedTerm] = useState(term);
    const [result, setResult] = useState([]);

    useEffect(()=>{
        const timerId = setTimeout(()=>{
            setDebouncedTerm(term);
        }, 1000);

        return () => {
            clearTimeout(timerId);
        }
    }, [term]);


    useEffect(()=> {
        const search = async () => {
            const {data} = await axios.get('https://en.wikipedia.org/w/api.php?', {
                params: {
                    action:'query',
                    list:'search',
                    origin:'*',
                    format:'json',
                    srsearch:debouncedTerm
                }
            });
            setResult(data.query.search);
        }
        search();        
    }, [debouncedTerm]);

    

    const renderedResult = result.map(res => {
        return(
        <div key={res.pageid} className="item">
            <div className="right floated content">
                <a className="ui button" href={`https//en.wikipedia.org?curid=${res.pageid}`}
                >Go</a>
            </div>
            <div className="content">
                <div className="header">
                    {res.title}
                </div>
                <span dangerouslySetInnerHTML={{__html: res.snippet}}></span>
                {res.snippet}
            </div>
        </div>);
    });

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
            <div className="ui celled list">
                {renderedResult}
            </div>
        </div>
      );
}
 
export default Search;