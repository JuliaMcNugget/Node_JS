import React, {useState} from "react";

const SearchBar = (props)=>{
    const [searchValue, setSearchValue] = useState("");

    const handleInputChange = (event)=>{
        setSearchValue(event.target.value);
    }
    const filteredProducts = props.Items.filter((product) =>{
        return product.title.toLowerCase().includes(searchValue.toLowerCase());
    });

    return(
        <div>
            <input type="text" value={searchValue} onChange={handleInputChange}></input>

            <section className="items">
                                
                {filteredProducts.map((product) =>{
                    return(
                        <figure key={product.id}>
                            <p>{product.title}</p>
                            <img  src={product.image} alt={product.title}></img>
                            <p>${product.price}</p>
                        </figure>
                    )
                })}

            </section>
       
        </div>
    );
};

export default SearchBar;