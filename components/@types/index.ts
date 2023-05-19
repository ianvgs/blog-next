export interface NoticiaType {
    id: number;
    idSite: number;
    titulo: string;
    resumo: string;
    texto: string;
    views: number | null,
    idCategoria: number;
    idColaborador: number;
    ativo: string;
    imgPath: string;
    createdAt: Date;
    updatedAt: Date;
    colaborador: ColaboradorType;
    tags: TagType[];
    categoria: CategoriaType;
}

interface ColaboradorType {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    ativo: string;
    createdAt: string;
    updatedAt: string;
}

export interface TagType {
    id: number;
    tag: string;
    idSite: number;
    color: string;
    createdAt: Date;
}


//Type detalhe Noticia
export interface NoticiaDetailsProps extends NoticiaType {
    imageData: any;
}

export interface AuthorProps {
    date: Date;
    autor: string;
}











export interface CategoriaType {
    id: number;
    nome: string;
    sufixurl: string;
    descricao: string;
    createdAt: Date;
    idSite: number;
    noticias: NoticiaDetailsProps[]

}

export interface ListaCategoriaProps {
    categoria: CategoriaType;

}


export interface TagsProps {
    tags: TagType[];
}

export interface Noticias {
    noticias: NoticiaDetailsProps[];
}

interface Colaborador {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    ativo: string;
    createdAt: string;
    updatedAt: string;
}




