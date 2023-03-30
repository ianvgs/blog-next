import * as yup from "yup";

export const noticiaFormValidation = {
  idCategoria: yup.object().required("Obrigatório vincular categoria."),
  idColaborador: yup.object().required("Obrigatório vincular colaborador"),
  titulo: yup.string().min(10, "Minimo 10 letras").max(70, "Máximo de 70 letras").required("Campo Obrigatório"),
  resumo: yup
    .string()
    .min(0, "Minimo de 0 letras")
    .max(370, "Máximo de 370 letras")
    .required("Campo Obrigatório"),
};



//titulo: 10-70 letras
//resumo: 200-370 letras
//texto: 550-1200 letras