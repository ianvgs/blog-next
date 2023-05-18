import * as yup from "yup";

export const noticiaFormValidation = {
  idCategoria: yup.object().required("Obrigatório vincular categoria."),
  idColaborador: yup.object().required("Obrigatório vincular colaborador"),
  titulo: yup.string().min(15, "Minimo 15 letras").max(48, "Máximo de 48 letras").required("Campo Obrigatório"),
  resumo: yup
    .string()
    .min(150, "Minimo de 70 letras")
    .max(370, "Máximo de 370 letras")
    .required("Campo Obrigatório"),
};



//titulo: 10-70 letras
//resumo: 200-370 letras
//texto: 550-1200 letras

export const categoriaFormValidation = {
  nome: yup.string().required("Nome obrigatório."),
  descricao: yup.string().required("Descrição obrigatória."),
  sufixurl: yup.string().required("Sufixo obrigatório."),
};

export const tagFormValidation = {
  tag: yup.string().required("Nome obrigatório."),
  color: yup.object().required("Cor obrigatória."),
};