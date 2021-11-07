class DateUtils {
    dateToApiDate = (date, onlyDate = false, onlyMinute = false) => {
        let dateString = "";
        if (date) {
            let year = date.getFullYear();
            let month = date.getMonth();
            //month start from 0
            month += 1;
            let day = date.getDate();
            let hour = onlyDate ? 0 : date.getHours();
            let minute = onlyDate ? 0 : date.getMinutes();
            let second = onlyDate ? 0 : date.getSeconds();

            if (onlyMinute) second = 0;

            if (month <= 9) month = "0" + month;
            if (day <= 9) day = "0" + day;
            if (hour <= 9) hour = "0" + hour;
            if (minute <= 9) minute = "0" + minute;
            if (second <= 9) second = "0" + second;

            dateString = `${year}-${month}-${day}T${hour}:${minute}:${second}`;
        }
        return dateString;
    };

    setTimeToApiDate(date, time) {
        const values = date.split("T");

        return values[0] + "T" + time.substr(0, 8);

    }
}

export default DateUtils = new DateUtils();