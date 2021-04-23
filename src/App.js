import React, { useState } from "react";
import { Route, Switch, Link } from 'react-router-dom'
import PizzaForm from './PizzaForm.js'
import Home from './Home.js'
import OrderDetails from "./OrderDetails.js";
import schema from './formSchema.js'
import * as yup from "yup";

const initialOrder = []

const initialData = 
    {
      name: '',
      size: '',
      cheese: false,
      pepperoni: false,
      olives: false,
      tomatoes: false,
      special: '',
    }

const initialFormErrors = {
  name: "Name required to place order.",
};

const App = () => {
  const [order, setOrder] = useState(initialOrder)
  const [formData, setFormData] = useState(initialData)
  const [formErrors, setFormErrors] = useState(initialFormErrors)


  const inputChange = (name, value) => {
    yup
      .reach(schema, name) 
      .validate(value) //
      .then(() => {
        setFormErrors({
          ...formErrors,
          [name]: "",
        });
      })
      .catch((err) => {
        setFormErrors({
          ...formErrors,
          [name]: err.errors[0],
        });
      });

    setFormData({
      ...formData,
      [name]: value, 
    });
  };



  const submit = () => {
    const newOrder = {
      name: formData.name.trim(),
      size: formData.size,
      toppings: ["cheese", "pepperoni", "olives", "tomatoes"].filter(
        (topping) => formData[topping]
      ),
      special: formData.special.trim(),
    }
    setOrder([...order, newOrder])
    setFormData(initialData)
  }

  // const changeHandler = (inputName, inputValue) => {
  //     setFormData({...formData, [inputName]: inputValue })
  // }

  return (
    <div>
      <h1>Lambda Eats</h1>
      <Link to='/'> Home</Link>
      <Link to='/pizza'> Order</Link>

      <Switch>
        <Route exact path="/">
          <Home/>
        </Route>
        <Route path="/pizza">
          <PizzaForm
          formData={formData}
          submit={submit}
          changeHandler={inputChange}
          errors={formErrors}
          />
        </Route>
      </Switch>
      {order.map((item, idx) => {
        return <OrderDetails key={idx} details={item} />;
      })}
    </div>
  );
};

export default App;