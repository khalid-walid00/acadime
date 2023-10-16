export default function Loading(props){

    return( <>
    <div className=" position-absolute top-0 load bg-dark opacity-25 text-center">
       <div className="position-relative top-50 text-warning fs-1 fw-bold">{"welcome: " + props.email }</div>
    <div className="spinner-border text-warning position-relative top-50 " style={{width:"3rem",height:"3rem"}}>
      
  <span className="visually-hidden">Loading...</span>
</div>
    </div></>)
}