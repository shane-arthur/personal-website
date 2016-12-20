function image(url) {
    return 'url(' + url + ')'
}

const backgroundImage = require('../../../../assets/images/halifax.jpg');

export const MAINPAGE_STYLE =
{
    backgroundImage: image(backgroundImage),
    backgroundSize: "auto",
    width: "1900px",
    height: "950px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center 0%",
    overflow: "hidden",
    position: "absolute",
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    margin: "auto"
};

export const MAINPAGE_WRAPPER_STYLE = {
    height: "100%",
    width: "100%",
    position: "relative"
};