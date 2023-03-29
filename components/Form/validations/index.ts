import * as yup from "yup";

export const noticiaFormValidation = {
  idCategoria: yup.object().required("Obrigatório vincular categoria."),
  idColaborador: yup.object().required("Obrigatório vincular colaborador"),
  titulo: yup.string().min(10, "Minimo 10 letras").max(70, "Máximo de 70 letras").required("Campo Obrigatório"),
  resumo: yup
    .string()
    .min(200, "Minimo de 250 letras")
    .max(370, "Máximo de 550 letras")
    .required("Campo Obrigatório"),
  texto: yup.string().min(550, "Minimo de 550 letras")
    .max(1200, "Máximo de 1200 letras").required("Campo Obrigatório"),
};



//titulo: 10-70 letras
//resumo: 200-370 letras
//texto: 550-1200 letras