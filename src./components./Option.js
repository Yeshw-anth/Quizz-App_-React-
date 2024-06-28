import React, { Component } from 'react';
 
class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;
 
        return (
            <div className='options'>
                {Object.entries(options).map(([key,value]) => (
                    <div key={key} className="form-check">
                        <input
                            type="radio"
                            name="option"
                            value={key}
                            checked={selectedOption === key}
                            onChange={onOptionChange}
                            className="form-check-input"
                        />
                        <label className="form-label">{key}:{value}</label>
                    </div>
                ))}
            </div>
        );
    }
}
 
export default Options;
