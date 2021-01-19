export interface SearchResponseDTO {
    message: string;
    result: SearchModel[];
    status: boolean;
}

export interface SearchModel {
    category_id: number;
    title: string;
    subcategory_id: number;
    entity_id: number;
    article_id: number;
    category_name: string;
    subcategory_name: string;
    entity_name: string;
}

export interface Article {
    id: number;
    title: string;
    short_description: string;
    description: string
    sub_category_history_id: number;
    path: string;
    history_id: number;
}

export interface SubcategoryArticles {
    sub_category_title: string;
    article_count: number;
    articles: Article[];
}