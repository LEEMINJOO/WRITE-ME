import moment from "moment";

export const getTime = () => {
    let date = moment().format();
    const now = date.substr(11,2);
    if(now < 7){
        //아침 7시 이전: 전날 pm 7시 업데이트된 keyword
        date = moment().subtract(1, 'days').format();
        return {date: date.slice(0, 10), time: 'pm'};
    }
    else if(now >= 7 && now < 19) return {date: date.slice(0, 10), time: 'am'};
    else return {date: date.slice(0, 10), time: 'pm'};
};
