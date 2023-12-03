
export interface SimpleComic {
    id: number,
    title: String,
    issueNumber: number,
    thumbnail: String,
    price: number,
    description: string,
};

export interface Comic {
    id: number,
    digitalId: number,
    title: String,
    issueNumber: number,
    variantDescription: String,
    modified: String,
    isbn: string,
    upc: string,
    diamondCode: string,
    ean: string,
    issn: string,
    format: string,
    pageCount: number,
    textObjects: [],
    resourceURI: String,
    urls: any,
    // urls: [
    //     {
    //         type: string,
    //         url: string,
    //     }
    // ]
    series:
    {
        resourceURI: string,
        name: string,
    },
    variants: [],
    collections: any,
    // collections: [
    //     {
    //         resourceURI: String,
    //         name: String,
    //     },
    //     {
    //         resourceURI: String,
    //         name: String,
    //     },
    // ],
    collectedIssues: [],
    dates: any,
    // dates: [
    //     {
    //         type: String,
    //         date: String,
    //     },
    //     {
    //         type: String,
    //         date: String,
    //     }
    // ],
    thumbnail: {
        path: String,
        extension: string,
    },
    prices: [
        {
            type: string,
            price: number,
        }
    ],
    images: any,
    creators:
    {
        available: number,
        collectionURI: string,
        items: any,
        returned: number,
    },
    characters: {
        available: number,
        collectionURI: string,
        items: any,
        // items: [
        //     {
        //         resourceURI: string,
        //         name: string,
        //     },
        // ],
        returned: number,
    },
    stories: {
        available: number,
        collectionURI: string,
        items: any,
        // items: [
        //     {
        //         resourceURI: string,
        //         name: string,
        //         type: string,
        //     },
        //     {
        //         resourceURI: string,
        //         name: string,
        //         type: string,
        //     },
        // ],
        returned: number,
    },
    events: {
        available: number,
        collectionURI: string,
        items: [],
        returned: number,
    },
    description: any,
}

