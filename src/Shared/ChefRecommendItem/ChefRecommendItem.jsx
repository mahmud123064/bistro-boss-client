

const ChefRecommendItem = ({ item }) => {

    const {name, image, recipe } = item;
    return (
        <div>
            <div className="card w-96 bg-base-100 space-y-4 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src = {image} alt="food" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center ">
                    <h2 className="card-title">{name}</h2>
                    <p className="mb-2">{recipe}</p>
                    <div className="card-actions">
                        <button className="btn btn-outline btn-secondary uppercase text-yellow-400">add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ChefRecommendItem;