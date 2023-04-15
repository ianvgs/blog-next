import axiosNest from '@/services/axiosNest';
//Estáticos: não alterar
export const LinksMenuPrincipal = [{ nome: 'Inicio', endereco: '/' }, { nome: 'Quem Somos', endereco: 'quem-somos' }];

/* export const LinksCategorias = [

    { nome: 'Economia', endereco: '/categoria/economia' },
    { nome: 'Finanças', endereco: '/categoria/financas' },
    { nome: 'Educação', endereco: '/categoria/educacao' },
    { nome: 'Cultura', endereco: '/categoria/cultura' },
    { nome: 'Dados Econômicos', endereco: '/dados-economicos' }]; */



export const getLinks = async () => {
    const links = await axiosNest.get('http://localhost:8000/api/news/categoria')
    console.log(links.data)
    const LinksCategorias = await links.data?.map(({ id, nome, sufixurl }) => ({
        nome: nome,
        endereco: `/categoria/${sufixurl}`,
        id: id
    }))
    return LinksCategorias
}





