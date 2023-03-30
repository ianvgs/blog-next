import React from "react";
import { Editor } from "@tinymce/tinymce-react";
import {
    useFormContext,
    FormProvider,
    useForm,
    useController
} from "react-hook-form";

type HtmlEditorProps = {
    name: "test";
};

type FormData = {
    test: string;
};

const HtmlEditorComponent = ({ name }: HtmlEditorProps) => {
    const { control } = useFormContext<FormData>();
    const {
        field: { onChange, ...field }
    } = useController({ control, name });

    return (
        <>
            <Editor
                apiKey={"qagffr3pkuv17a8on1afax661irst1hbr4e6tbv888sz91jc"}
                {...field}
                onEditorChange={onChange}
                init={{
                    height: 200,
                    menubar: false,
                    plugins: [
                        "advlist autolink lists link image charmap print preview anchor",
                        "searchreplace visualblocks code fullscreen",
                        "insertdatetime media table paste code help wordcount"
                    ],
                    toolbar:
                        "undo redo | formatselect | " +
                        "bold italic backcolor | alignleft aligncenter " +
                        "alignright alignjustify | bullist numlist outdent indent | " +
                        "removeformat | help",
                    content_style:
                        "body { font-family:Helvetica,Arial,sans-serif; font-size:14px, }"
                }}
            />

            <hr />
            <pre>{field.value}</pre>
        </>
    );
};

export default function App() {
    const methods = useForm<FormData>();

    const onSubmit = methods.handleSubmit((data) => console.log(data));

    return (
        <FormProvider {...methods}>
            <form onSubmit={onSubmit}>
                <HtmlEditorComponent name="test" />
            </form>
        </FormProvider>
    );
}