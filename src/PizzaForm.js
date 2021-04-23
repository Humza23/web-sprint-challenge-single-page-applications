import React from 'react'

const PizzaForm = (props) => {

    const { formData, submit, changeHandler, errors } = props;
    
    const onSubmit = evt => {
        evt.preventDefault()
        submit();
    }

    const onChange = (evt) => {
        const { name, value, checked, type } = evt.target;
        const valueToUse = type === "checkbox" ? checked : value;
        changeHandler(name, valueToUse);
      };
    


    return (
        <div>
            <form onSubmit ={onSubmit} id="pizza-form">
                <div>
                {errors.name}
                {errors.size}
                </div>
                <label>Name:
                    <input type="text" name="name" value={formData.name} onChange={onChange} id="name-input">
                    </input>
                </label>
                <label>Size:
                    <select onChange={onChange} name="size" value={formData.size}>
                        <option value = ''>--Select Size--</option>
                        <option value = 'small'>Small</option>
                        <option value = 'medium'>Medium</option>
                        <option value = 'large'>Large</option>
                    </select>
                </label>
                <label>Cheese:
                    <input type="checkbox" onChange={onChange} name="cheese"></input>
                </label>
                <label>Pepperoni:
                    <input type="checkbox" onChange={onChange} name="pepperoni"></input>
                </label>
                <label>Olives:
                    <input type="checkbox" onChange={onChange} name="olives"></input>
                </label>
                <label>Tomatoes:
                    <input type="checkbox" onChange={onChange} name="tomatoes"></input>
                </label>
                <label>Special:
                    <input type="text" name="special" value={formData.special} onChange={onChange} id="special-text">
                    </input>
                </label>
                <button id="order-button">
                    Submit
                </button>
            </form>
        </div>
    )
}

export default PizzaForm