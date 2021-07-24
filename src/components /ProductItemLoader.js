import React from "react"
import ContentLoader from "react-content-loader"



const ProductItemLoader = (props) => {
    return (
        <ContentLoader className={"product-item"}
            speed={2}
            width={210}
            height={260}
            viewBox="0 0 170 260"
            backgroundColor="#f3f3f3"
            foregroundColor="#ecebeb"
            {...props}
        >
            <rect x="10" y="28" rx="10" ry="10" width="150" height="91" />
            <rect x="10" y="143" rx="10" ry="10" width="150" height="20" />
            <rect x="10" y="174" rx="10" ry="10" width="93" height="20" />
            <rect x="131" y="215" rx="10" ry="10" width="32" height="32" />
            <rect x="10" y="220" rx="10" ry="10" width="80" height="25" />
        </ContentLoader>
    )
}

export default ProductItemLoader