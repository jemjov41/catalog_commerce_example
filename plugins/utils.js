import moment from 'moment';
import 'moment/locale/id';

export default ({
    app
}, inject) => {
    inject('priceFormatter', value => {
        let val = (value / 1)
        return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
    }),
        inject('utcToLocal', (date, format) => {
            var utcLocal = moment.utc(date, "DD-MM-YYYY HH:mm").local().format(format);
            return utcLocal;
        })
    inject('dateToString', date => {
        var millisDate = moment(date, "DD-MM-YYYY HH:mm").valueOf();
        var modifiedTime = moment(millisDate).format("DD MMM YYYY HH:mm")
        return modifiedTime;
    }),
        inject('dateToStringSlash', date => {
            var millisDate = moment(date, "DD-MM-YYYY HH:mm").valueOf();
            var modifiedTime = moment(millisDate).format("DD/MM/YYYY HH:mm")
            return modifiedTime;
        }),
        inject('dateToStringCust', (date, format) => {
            var millisDate = moment(date, "DD-MM-YYYY HH:mm").valueOf();
            var modifiedTime = moment(millisDate).format(format)
            return modifiedTime;
        }),
        inject('getDate', date => {
            var millisDate = moment(date, "YYYY-MM-DD").valueOf();
            var d1 = new Date(millisDate);
            return d1.getDate();
        }),
        inject('getMonth', date => {
            var millisDate = moment(date, "YYYY-MM-DD").valueOf();
            var d1 = new Date(millisDate);
            return d1.getMonth() + 1;
        }),
        inject('getYear', date => {
            var millisDate = moment(date, "YYYY-MM-DD").valueOf();
            var d1 = new Date(millisDate);
            return d1.getFullYear();
        }),
        inject('getDateNow', value => {
            var d1 = new Date();
            return d1.getDate();
        }),
        inject('getMonthNow', value => {
            var d1 = new Date();
            return ("0" + (d1.getMonth() + 1)).slice(-2);
        }),
        inject('getYearNow', value => {
            var d1 = new Date();
            return d1.getFullYear();
        }),
        inject('milisToString', date => {
            var millisDate = moment(date).valueOf();
            var modifiedTime = moment(millisDate).format("DD MMM YYYY HH:mm")
            return modifiedTime;
        }),
        inject('stringToMilis', (date, format) => {
            var millisDate = moment(date, format).valueOf();
            // var modifiedTime = moment(millisDate).format("DD MMM YYYY HH:mm")
            return millisDate;
        }),
        inject('genderDynamic', (gender, locale) => {
            if (locale == 'en') {
                if (gender == "MALE") {
                    return 'Male';
                } else {
                    return 'Female';
                }
            } else if (locale == 'id') {
                if (gender == "MALE") {
                    return 'Pria';
                } else {
                    return 'Wanita';
                }
            }
        }),
        inject('differentTime', (date, locale, kind) => {

            var dateEdit = moment(date, "DD-MM-YYYY HH:mm").date();
            var monthEdit = moment(date, "DD-MM-YYYY HH:mm").month();
            var yearEdit = moment(date, "DD-MM-YYYY HH:mm").year();

            var d1 = new Date();

            var dateNow = d1.getDate();
            var monthNow = d1.getMonth();
            var yearNow = d1.getFullYear();

            var today = moment().valueOf();
            var utcLocal = moment.utc(date, "DD-MM-YYYY HH:mm").local().valueOf();

            var diff = utcLocal - today;

            var diffDay = parseInt(diff / (24 * 60 * 60 * 1000));

            var diffHours = parseInt(diff / (60 * 60 * 1000));

            var diffMinute = parseInt((diff / (60 * 1000)) % 60);

            var ck = '';
            var mnt = '';
            var day = '';
            var ago = '';

            if (locale == 'en') {
                ck = ' clock ';
                mnt = ' minute ';
                day = ' day ';
                ago = 'a go';
            } else if (locale == 'id') {
                ck = ' jam ';
                mnt = ' menit ';
                day = ' hari ';
                ago = ' yang lalu';
            }
            if (diff <= 0 && kind != 'BOOKING') {
                return "expire";
            }

            if (yearNow == yearEdit) {
                if (monthNow == monthEdit) {
                    if (dateNow == dateEdit) {
                        if (diffHours <= 0) {
                            if (diffMinute < 0) {
                                if (diffHours == 0) {
                                    return (diffMinute + "").replace("-", "") + mnt + ago;
                                } else {
                                    return (diffHours + ck + diffMinute + mnt + ago).split("-").join("");
                                }
                            } else {
                                return diffMinute + mnt;
                            }
                        } else {
                            return diffHours + ck + diffMinute + mnt;
                        }
                    } else {
                        if (diffDay < 0) {
                            return (diffDay + day + diffHours + ck + ago).split("-").join("");
                        } else {
                            return diffDay + day + diffHours + ck;
                        }
                    }
                } else {
                    return diffDay + day + diffHours + ck;
                }
            } else {
                return diffDay + day + diffHours + ck;
            }
        }),
        inject('emailValidation', value => {
            var reg = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/;
            return reg.test(value);
        }),
        inject('numberValidation', value => {
            var reg = /^\d+$/;
            return reg.test(value);
        })

}