import { Tag, Wrap, WrapItem } from "@chakra-ui/react";
import { TagsProps } from "../@types";

export const BlogTags: React.FC<TagsProps> = ({ tags }: TagsProps) => {
    const typesVariants = ["subtle", "solid", "outline"]
    return (
        <Wrap spacing={2} >
            {tags.map((tag: any, index: number) => {
                return (
                    <WrapItem key={index}>
                        <Tag size={'md'} variant={typesVariants[1]} colorScheme={tag.color}  >
                            {tag.tag}
                        </Tag>
                    </WrapItem>
                )
            })}
        </Wrap>
    )
};