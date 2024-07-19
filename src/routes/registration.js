import { Form } from "react-router-dom";
import { useForm } from "react-hook-form";

export default function Registration() {
    const { register, handleSubmit, watch, formState: { errors } } = useForm();
    const name = watch("name")
    const onSubmit = data => console.log(data);
    return (
        <div>

            <h1>Register</h1>

            <p> Name: {name} </p>
        <Form onSubmit={handleSubmit(onSubmit)}>
        <label htmlFor="name">Name:</label>
        <input {...register("name")} />
        <label htmlFor="phone">Phone:</label>
        <input {...register("phone")} />
        <label htmlFor="plus_one">Plus:</label>
        <input {...register("plus_one")} />
        <label htmlFor="alcohol">Alcohol:</label>
        <select {...register("alcohol")} >
            <option value="lots">Lots</option>
            <option value="not_a_lot">Not a lot</option>
            <option value="none">I'm sober</option>
        </select>
        <label htmlFor="weed">Weed:</label>
            <select {...register("weed")} >

                <option value="lots">Lots</option>
                <option value="not_a_lot">Not a lot</option>
                <option value="none">I'm sober</option>
            </select>
            <button type="submit">Register</button>
        </Form>
        </div>
    );
}