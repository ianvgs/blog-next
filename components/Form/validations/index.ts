import * as yup from "yup";

export const noticiaFormValidation = {
  idCategoria: yup.object().required("Obrigatório vincular categoria."),
  idColaborador: yup.object().required("Obrigatório vincular colaborador"),
  titulo: yup.string().min(10, "Minimo 10 letras").max(100, "Máximo de 25 letras").required("Campo Obrigatório"),
  resumo: yup
    .string()
    .min(20, "Minimo de 20 letras")
    .max(100, "Máximo de 100 letras")
    .required("Campo Obrigatório"),
  observacao: yup.string()
    .max(30, "Máximo de 100 letras").required("Campo Obrigatório"),
};


