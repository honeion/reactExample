import axios from 'axios'
import React from 'react'
const baseURL = "https://jsonplaceholder.typicode.com/posts/1"

function Help() {
    const [post, setPost] = React.useState({});//psot를 setting 할 수 있도록

    // React.useEffect(() => {
    //     axios.get(baseURL)
    //     .then((response)=>{
    //         setPost(response.data);
    //     })
    //     .catch((error)=>{
    //         console.log(error);
    //     })
    // },[]); //상태값들이 변하는게 있으면 위 값들이 움직이도록 세팅하는건데 (dependencies) 잘못 설정하면 무한루프 돌 수 있음
    // async await
    // React.useEffect(()=>{
    //     async function doIt() {
    //         try{
    //             const response = await axios.get(baseURL);
    //             setPost(response.data);
    //         } catch(error){
    //             console.log(error);
    //         }
    //     }
    //     doIt();
    // },[]);
    //익명함수로
    // React.useEffect(()=>{
    //     const doIt = async function() {
    //         try{
    //             const response = await axios.get(baseURL);
    //             setPost(response.data);
    //         } catch(error){
    //             console.log(error);
    //         }
    //     }
    //     doIt();
    // },[]);
    //함수랑 분리
    const doIt = async function() {
        try{
            const response = await axios.get(baseURL);
            setPost(response.data);
        } catch(error){
            console.log(error);
        }
    }
    React.useEffect(()=>{doIt()},[]);
    if(!post) return null;
    return (
        <div>
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
      )
}
export default Help
