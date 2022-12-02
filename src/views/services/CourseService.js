import http from '../utils/http'

const getAllCourses = async ()=>{
    return await http.get('/course',)
}

const createCourse = async (data)=>{
    return await http.post('/course',data)
}
const getCourseById = async (id)=>{
    return await http.get('/course/'+id)
}
const UpdateCourseById = async (data,id)=>{
    return await http.put('/course/'+id,data)
}

const DeleteCourse = async (listId)=>{
    return await http.delete('/course/'+listId)
}
const courseAPIS = {
    getAllCourses,
    createCourse,
    getCourseById,
    UpdateCourseById,
    DeleteCourse
}
export default courseAPIS

