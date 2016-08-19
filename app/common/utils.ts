
export class Utils {
    static CurrentDate = function() {
        return new Date().toLocaleDateString();
    }

    static CurrentTime = function() {
        return new Date().toLocaleTimeString();
    }

    static CurrentDateTime = function() {
        return new Date().toLocaleString();
    }

    static RandomInt = function (digits: number = 10) {
        return Math.floor(Math.random() * Math.pow(10, digits));
    }

    public static goBack = function() {
        window.history.back();
    }



    public static getResponsiveClass = function(width, size = 'xs') {
        return `col-${size}-${width}`;
    }
}