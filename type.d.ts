export interface Product {
    name: string;
    _type: "product";
    slug: {
        _type: "slug";
        current: string;
    };
    _id: any;
    price: any;
    description:string;
    imageUrl:string;
    image: {
        assest:{
            _ref:string;
        };
    };
    category: string;
    discountPercent: any;
    isNew: boolean;
    colors: string[];
    sizes: string[]; 
    
}