function image(url) {
    return 'url(' + url + ')'
}

const backgroundImage = require('../../../../assets/images/backdrop.jpg');

export const CARD_STYLE = {
    border: "1 px solid black",
    height: "500px",
    width: "900px",
    background: "green",
    left: "400px",
    top: "200px",
    position: "absolute",
    opacity: "0.9"
};

export const SELFIE_STYLE = {
    width: "408px",
    height: "544px",
    borderRadius: "50px",
    display: "table",
    margin: "0 auto",
    marginTop: "25px"
};

export const PICTURE_FRAME_STYLE = (width, height, right, top) => {
    return {
        background: image(backgroundImage) + "no-repeat center top",
        width: width,
        height: height,
        position: "absolute",
        right: right,
        top: top,
        borderRadius: "50px"
    }
};

export const PICTURE_FRAME_HEADER_STYLE = {
    fontFamily: 'fantasy',
    fontSize: '54px',
    fontWeight: '300',
    color: 'white',
    textAlign: 'center',
    lineHeight: '58px',
    marginTop: '30px'
}
