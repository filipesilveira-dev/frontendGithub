export interface Destination {
    id: string;
    // slug será utilizado para rotas dinâmicas
    slug?: string;
    title: string;
    img: string;
    shortDescription: string;
    longDescription: string;
    price: number;
}