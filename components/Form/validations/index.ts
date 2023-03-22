import * as yup from "yup";

export const tagFormValidation = {
  tag: yup
    .string()
    .min(2, "Muito curto")
    .max(100, "Máximo de 10 letras")
    .required(),
  descricao: yup.string().required(),
};

export const noticiaFormValidation = {
  resumo: yup
    .string()
    .min(2, "Muito curto")
    .max(100, "Máximo de 10 letras")
    .required(),
  observacao: yup.string().required(),
};

export const eventoFormValidation = {
  descricao: yup
    .string()
    .min(2, "Muito curto")
    .max(100, "Máximo de 10 letras")
    .required(),
};
