 export const getStaticProps = async()=>{
  let res = await fetch(`http://localhost:8080/mydata`)
  let data = await  res.json();
   
  return {
    props :{
      data,
    }
  }
}
const index = ({data}) => {
  return (
    <>

  {console.log("data",data)}
  {data.map((el)=>{
    return <div key="el.id">
      <h1>Shivam Dubey</h1>
      <h3>Full-stack web developer </h3>
      <h4>gitHub Username : {el.log}</h4>

      <img width="150px" id="img" src={el.avatar_url} alt="" /><br />
      <button  id="folo">Follow 🍀 </button>
      <button  id="folo">Twiter 🔀</button>
      <button  id="folo">Linkedin 🔗</button>
    </div>
  })}
    </>
  )
}
export default index