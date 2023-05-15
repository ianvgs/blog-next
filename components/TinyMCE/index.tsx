import React, { MutableRefObject } from 'react'
import { Editor } from '@tinymce/tinymce-react'

type TinyMCEProps = {
  /* identificador do editor (caso tenha mais de 1 na pagina precisa identificar individualmente. Padrão: "") */
  id?: string,
  /* altura do editor (default 500 px) */
  height?: string | number,
  /* mostrar ou nao a barra de menu do editor (padrão: true) */
  showMenubar?: boolean,
  /* parametro para sobrescrever a toolbar padrao */
  toolbar?: any,
  /* permite sobrescrever os itens do menu do editor */
  menu?: any,
  /* parametros extras para passar na inicializacao do editor */
  extraInit?: any,
  /* base de emoticos a ser usado. (emojiimages (padrão) | emoji) */
  emoticonsDatabase?: string,
  /* indica se permite colar imagens diretamente no editor (padrão: true) */
  allowPasteDataImages?: boolean,
  /* apresenta o editor em modo inline (padrão: false) */
  showInline?: boolean,
  /* texto inicial do editor (padrão: "") */
  defaultValue?: string,
  /* lista com os tamanhos das fontes permitidas no editor */
  fontSizeFormats?: string,
  /* idioma do editor (Padrão: pt_BR) */
  language?: string,
  /* largura do editor */
  width?: string | number,
  /* foco inicial no editor. passar true ou o id do editor como foco, no caso de varios na mesma pagina */
  autoFocus?: boolean | string,
  /* lista de plugins (sobrescreve a atual) */
  plugins?: any,
  /* key do component */
  key?: any,
  /* Funcao que é chamada quando o conteudo incial do editor foi alterado. */
  onEditorChange?: (e: any, editor: any) => void,
  editorRef?: MutableRefObject<any>
}

const defaultLanguage = "pt_BR"
export const defaultToolbar = "emoticons | undo redo | bold italic underline strikethrough | fontsize | alignleft aligncenter alignright alignjustify | blockquote bullist numlist outdent indent | forecolor backcolor | link preview code fullscreen"
export const defaultMenu = {
  insert: {
    title: "Insert",
    items:
      "image link media template codesample inserttable | charmap emoticons hr | pagebreak nonbreaking anchor toc | insertdatetime",
  },
}

export const defaultEmoticonsDatabase = "emojiimages"
export const defaultFontSizeFormats = "8pt 9pt 10pt 11pt 12pt 13pt 14pt 15pt 16pt 18pt 20pt 22pt 24pt 32pt 36pt"
export const defaultPluginsList = `advlist autolink lists image charmap preview anchor link 
                            searchreplace visualblocks hr searchreplace visualchars 
                            emoticons media insertdatetime imagetools table paste code fullscreen`

export default function TinyMCE(props: TinyMCEProps) {
  //propriedades adicionais que podem ser passadas para incrementar ou sobrescrever
  //alguma propriedade de inicializacao do componente.
  let extraInit = props.extraInit ? { ...props.extraInit } : {};

  extraInit = {
    ...extraInit,
    force_br_newlines: true,
    force_p_newlines: false,
    forced_root_block: ""
  }

  const height = props.height !== undefined ? props.height : 500
  const width = props.width !== undefined ? props.width : undefined
  const menu = props.menu !== undefined ? props.menu : defaultMenu
  const toolbar = props.toolbar !== undefined ? props.toolbar : defaultToolbar
  const inline = props.showInline !== undefined ? props.showInline : false
  const defaultValue = props.defaultValue !== undefined ? props.defaultValue : ""
  const emoticonsDatabase = props.emoticonsDatabase !== undefined ? props.emoticonsDatabase : defaultEmoticonsDatabase
  const editorId = props.id !== undefined ? props.id : "tinymce5"
  const allowPasteDataImages = props.allowPasteDataImages !== undefined ? props.allowPasteDataImages : true
  const showMenubar = props.showMenubar !== undefined ? props.showMenubar : true
  const fontSizeFormats = props.fontSizeFormats !== undefined ? props.fontSizeFormats : defaultFontSizeFormats
  const language = props.language !== undefined ? props.language : defaultLanguage
  const autoFocus = props.autoFocus !== undefined ? (props.autoFocus === true ? editorId : props.autoFocus) : undefined
  const pluginsList = props.plugins !== undefined ? props.plugins : defaultPluginsList
  const key = props.key !== undefined ? props.key : editorId

  return (
    <Editor
      id={editorId}
      onEditorChange={props?.onEditorChange}
      inline={inline}
      value={defaultValue}
      tinymceScriptSrc="/js/tinymce.min.js"
      scriptLoading={{
        async: true
      }}
      key={key}
      onInit={(evt, editor) => props.editorRef ? props.editorRef.current = editor : null}
      init={{

        selector: "textarea", // change this value according to your HTML
        automatic_uploads: true,
        plugins: [
          "advlist",
          "autolink",
          "lists",
          "link",
          "image",
          "charmap",
          "preview",
          "anchor",
          "searchreplace",
          "visualblocks",
          "code",
          "fullscreen",
          "insertdatetime",
          "media",
          "table",
          "code",
          "help",
          "wordcount",
        ],
        content_style:
          "body { font-family:Helvetica,Arial,sans-serif; font-size:14px }",






        images_upload_url: 'http://localhost:8000/api/news/noticia/upload',
        images_upload_base_path: '/images',
        images_upload_credentials: true,
        /* images_reuse_filename: true, */
        file_picker_types: 'image',
        file_picker_callback: (cb, value, meta) => {
          // Implement your file picker logic here
        },



        auto_focus: autoFocus,
        relative_urls: false,
        language: language,
        default_link_target: "_blank",
        convert_urls: false,
        remove_script_host: false,
        paste_data_images: allowPasteDataImages,
        image_advtab: true,
        emoticons_database: emoticonsDatabase,
        /*   plugins: pluginsList, */
        height: height,
        width: width,
        menubar: showMenubar,
        font_size_formats: fontSizeFormats,
        toolbar: toolbar,
        menu: menu,
        ...extraInit
      }}
    />
  )
}
