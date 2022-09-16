import { format,isToday,parseISO } from 'date-fns'


export const checkIfToday=(date)=>{
     return isToday(parseISO(date));
}