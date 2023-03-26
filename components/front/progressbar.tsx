import { Box, Flex, Heading } from '@chakra-ui/react'
import React from 'react'

const ProgressBar = ({ progress, height }) => {

    let progressColor = ""
    if (progress > 50) {
        progressColor = "nes-progress is-success"
    } else if (progress > 20) {
        progressColor = "nes-progress is-warning"
    } else if (progress > 0) {
        progressColor = "nes-progress is-error"
    } else {
        progressColor = "nes-progress is-pattern"
    }
    const Parentdiv = {
        height: height,
    }
    return (
        <Box position={"relative"} display={"flex"} alignItems={"center"} justifyContent={"end"} >
            <progress style={Parentdiv} className={progressColor} value={progress} max="100" />
            <Heading fontSize={"15"} position="absolute" bottom="5%" mx={5}>{`${progress}%`}</Heading >
        </Box>
    )
}

export default ProgressBar;


{/* <div style={Parentdiv} className="nes-progress is-success">
            <div style={Childdiv} >
                <text style={progresstext}>{`${progress}%`}</text>
            </div>
        </div> */}