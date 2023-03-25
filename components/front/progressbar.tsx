import React from 'react'

const ProgressBar = ({ progress, height }) => {

    let progressColor = ""
    if (progress > 50) {
        progressColor = "green"
    } else if (progress > 5) {
        progressColor = "#FCFC30"
    } else if (progress > 0) {
        progressColor = "red"
    }


    const Parentdiv = {
        height: height,
        width: '100%',
        backgroundColor: 'whitesmoke',
        borderRadius: 40,
    }

    const Childdiv = {
        height: '100%',
        width: `${progress}%`,
        backgroundColor: progressColor,
        borderRadius: 40,
        textAlign: 'right'
    }

    const progresstext = {
        color: 'black',
        fontWeight: 900,

    }

    return (
        <div style={Parentdiv}>
            <div style={Childdiv}>
                <text style={progresstext}>{`${progress}%`}</text>
            </div>
        </div>
    )
}

export default ProgressBar;