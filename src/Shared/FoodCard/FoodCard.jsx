
const FoodCard = ({item}) => {
    const {name, image, recipe, price} = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10 ">
                    <img src = {image} alt="Shoes" className="rounded-xl " />
                </figure>
                <p className="bg-slate-900 text-white absolute right-0 mr-12 px-4 mt-12">${price}</p>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{name}</h2>
                    <p>{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline uppercase flex flex-col items-center justify-center mx-auto border-0 border-b-4 bg-slate-100 border-orange-500">Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;