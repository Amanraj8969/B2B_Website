import axios,{AxiosResponse} from "axios"

export const getTodos = async ()=>{
    let res = await axios.get("http://localhost:5000/alllaptop")
    {console.log("---",res)}
    return res.data
}
export const lth = async()=>{
    // let res  = await axios.get("http://localhost:5000/sortlaptop/?_sort=price&_order=asc")
    let res  = await axios.get("http://localhost:5000/sortlaptop/price/0")

    {console.log(">>>>>>>>>>>>>>>>>>>sdjflksdf>>>>>>>>>>",res)}
    return res.data
}
export const htl = async()=>{
    // let res = await axios.get("http://localhost:5000/laptop/?_sort=price&_order=desc")
    let res = await axios.get("http://localhost:5000/sortlaptop/price/1")

    return res.data
}
export const hP = async()=>{
    let res  = await axios.get("http://localhost:5000/filterlaptops/HP")
    return res.data
}
export const APple = async()=>{
    let res  = await axios.get("http://localhost:5000/filterlaptops/Apple")
    return res.data
}
export const DEll = async()=>{
    let res = await axios.get("http://localhost:5000/filterlaptops/Dell")
    return res.data
}
export const LEnovo = async()=>{
    let res  = await axios.get("http://localhost:5000/filterlaptops/Lenovo")
    return res.data
}
export const MIcrosoft = async()=>{
    let res = await axios.get("http://localhost:5000/filterlaptops/Microsoft")
    return res.data
}
export const ACer = async()=>{
    let res = await axios.get("http://localhost:5000/filterlaptops/Acer")
    return res.data
}
export const TOshiba = async()=>{
    let res  = await axios.get("http://localhost:5000/filterlaptops/Toshiba")
    return res.data
}
// https://bharatmart.onrender.com/laptop

// https://bharatmart.onrender.com/phones