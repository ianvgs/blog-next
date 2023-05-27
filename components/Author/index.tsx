import { Text } from "@chakra-ui/react";
import moment from "moment";
import { useEffect, useState } from "react";
import { AuthorProps } from "../@types";

export const Author = ({ date, autor }: AuthorProps) => {
    const [aut, setAut] = useState<string | undefined>(undefined);
    const [dt, setDt] = useState<string | undefined>(undefined);
    useEffect(() => {
        setAut(autor)
        setDt(moment(date).format('ll'))

    }, [date, autor])
    return (
        <Text fontWeight="bold" fontSize={14} alignSelf={'end'}>
            Por {autor}, {dt}
        </Text>

    );
};


