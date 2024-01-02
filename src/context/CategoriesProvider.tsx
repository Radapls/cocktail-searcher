import React, { ReactNode } from "react";

const CategoriesContext = React.createContext('');

const CategoriesProvider = (children: ReactNode) => {

    return (
        <CategoriesContext.Provider value={''}>
            {children}
        </CategoriesContext.Provider>
    )
}

export default CategoriesProvider;
