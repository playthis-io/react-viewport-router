

const isDesktop  = w => w >= 900
const isTablet = w => w < 900 && w >= 700
const isMobile = w => w < 700


export const deviceType = (props, winWidth) => {
    switch(true) {
        case props.hasOwnProperty('desktop') && isDesktop(winWidth):
            return true
        case props.hasOwnProperty('tablet') && isTablet(winWidth):
            return true
        case props.hasOwnProperty('mobile') && isMobile(winWidth):
            return true
        default:
            return false;
    } 
}