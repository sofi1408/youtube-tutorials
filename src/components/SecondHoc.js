
const SecondHoc = (OldComponent) => {
    return function EnhanceComponent(props){

        return(
          <OldComponent {...props} name='secondHoc' />
        )
    }
}

export default SecondHoc;