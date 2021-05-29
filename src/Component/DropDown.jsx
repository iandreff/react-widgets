import React from 'react';





const DropDown = ({options}) => {
    const renderedOptions = options.map(opt => {
        
        return(
            <div key={opt.value} className="item">
                {opt.label}
            </div>
        );

    });
    return (
        <div className='ui form'>
            <div className='field'>
                <label className="label">Select a color</label>
                <div className="visible active">
                    <i className="dropdown icon"></i>
                    <div className="text"></div>
                    <div className="menu visible transition">
                        
                    </div>
                </div>
            </div>
        </div>
      );
}
 
export default DropDown;