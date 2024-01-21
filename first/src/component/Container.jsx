function Container({children}){
    return (
      <div className="container-sm border border-primary  p-5 d-flex flex-column justify-content-center m-5 rounded-3">
        {children}
      </div>
    ); 
}

export default Container;