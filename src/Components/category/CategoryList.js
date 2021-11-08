import ItemCategory from "./ItemCategory"

const CategoryList = ({data}) => {
    return (
        <>
            {data
                .map((elemento) => 
                <ItemCategory key={elemento.categoria} categoria={elemento.categoria} img={elemento.img}
                />)}
        </>
    )
}

export default CategoryList;