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