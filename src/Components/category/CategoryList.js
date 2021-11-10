import ItemDetailContainer from "./ItemDetailContainer"

const CategoryList = ({data}) => {
    return (
        <>
            {data
                .map((elemento) => 
                <ItemDetailContainer key={elemento.categoria} categoria={elemento.categoria} img={elemento.img}
                />)}
        </>
    )
}

export default CategoryList;