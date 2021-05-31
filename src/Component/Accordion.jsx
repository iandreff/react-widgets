import React, { useState } from 'react';


const Accordion = ({items}) => {
    const [activeIndex, setActiveIndex] = useState(null);
    const ontitleClick = (i) => {
        setActiveIndex(i);
    };

    const renderdItems = items.map((item, i)=>{
        const active = i === activeIndex? 'active': '';

        return (
            <React.Fragment key={item.title}>
                <div 
                    className={`title ${active}`}
                    onClick={()=>ontitleClick(i)}
                >
                    <i className="dropdown icon"></i>
                    {item.title}
                </div>
                <div className={`content ${active}`}>
                    {item.content}
                </div>
            </React.Fragment>
        );
    });

    return (
        <div className="ui styled accordion">
            {renderdItems}
        </div>
      );
}
 
export default Accordion;