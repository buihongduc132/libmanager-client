
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

    public static bindEnum = function(enumArr) {
        var arr = new Array();

        for(let item in enumArr) {
            if(!(+item > 0 )) {
                arr.push(item);
            }
        }

        return arr;
    }

    public static showFirstNChars(text: string, numberOfChar: number = 20) {
        if (text) {
            return text.length < numberOfChar ? text : `${text.substr(0, numberOfChar)} ...`;
        }
        else {
            return '';
        }
    }
}