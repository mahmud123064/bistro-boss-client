import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import { useForm } from 'react-hook-form';

const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;

const AddItem = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const img_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`

    const onSubmit = data => {
    const formData = new FormData();
    formData.append("image", data.image[0]);
    fetch(img_hosting_url,{
        method:"POST",
        body: formData
    })
    .then(res => res.json())
    .then(imgResponse => {

        console.log(imgResponse);
        if(imgResponse.success){
            const imgUrl = imgResponse.data.display_url;
            const {name,price,category,recipe} = data;
            const newItem = { name, price: parseFloat(price), category, recipe, image : imgUrl }
            console.log(newItem);
        }
    })
    }

    return (
        <div className="px-12">

            <Helmet>
                <title>Bistro Boss | add an item</title>
            </Helmet>
            <SectionTitle heading='add an item' subHeading="What's new?"></SectionTitle>

            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control w-full mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe name*</span>
                    </label>
                    <input type="text" placeholder="Recipe name"
                        {...register("name", { required: true, maxLength: 120 })}
                        className="input input-bordered w-full " />
                </div>

                <div className="flex gap-4 mb-4">

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Category*</span>

                        </label>
                        <select defaultValue = "Select One" {...register("category", { required: true })} className="select select-bordered">
                            <option disabled >Select One</option>
                            <option>Pizza</option>
                            <option>Soup</option>
                            <option>Salad</option>
                            <option>Drinks</option>
                            <option>Desserts</option>
                            <option>Desi</option>
                        </select>
                    </div>

                    <div className="form-control w-full ">
                        <label className="label">
                            <span className="label-text font-semibold">Price*</span>
                        </label>
                        <input type="number" placeholder="Price"
                            {...register("price", { required: true })}
                            className="input input-bordered w-full " />
                    </div>
                </div>

                <div className="form-control mb-4">
                    <label className="label">
                        <span className="label-text font-semibold">Recipe Details*</span>
                    </label>
                    <textarea className="textarea textarea-bordered h-24"
                        {...register("recipe", { required: true })}
                        placeholder="Recipe Details"></textarea>
                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text font-semibold">Item Image*</span>
                    </label>
                    <input type="file" {...register("image", { required: true })}
                        className="file-input file-input-bordered w-full max-w-xs" />
                </div>

                <input className="btn btn-sm mt-5" type="submit" value="Add Item" />
            </form>
        </div>
    );
};

export default AddItem;